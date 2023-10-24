<template>
  <div class="reels-modal-card" v-if="swiperSlideState.value.isActive">
    <div class="reels-modal-card-content">
      <loader v-if="isLoading" />
      <video
        autoplay
        muted
        :src="activePage.source"
        v-if="activePage.sourceType == VIDEO_SOURCE_TYPE"
        ref="videoPlayer"
        @loadedmetadata="logDuration"
        @timeupdate="updateProgressBar"
        :key="activePage.id"
        @ended="onVideoEnd()"
        @canplay="updateVideoPaused"
        @playing="updateVideoPaused"
        @pause="updateVideoPaused"
      >
        Your browser does not support the video tag.
      </video>
      <img
        :src="activePage.source"
        alt=""
        v-if="activePage.sourceType == IMAGE_SOURCE_TYPE"
        @load="imageLoaded"
      />
    </div>
    <div class="reels-modal-card-overlay">
      <div class="reels-modal-card-header">
        <div class="reels-modal-card-header-info">
          <div class="reels-modal-card-header-info-avatar">
            <img src="" alt="" />
          </div>

          <div class="reels-modal-card-header-info-block">
            <div class="reels-modal-card-header-info-title">Title</div>
            <div class="reels-modal-card-header-info-createdblock">
              <div class="reels-modal-card-header-info-username">anko</div>
              <div class="reels-modal-card-header-info-date">4h</div>
            </div>
          </div>
        </div>
        <div class="reels-modal-card-close" @click="toggleModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <g opacity="0.5" clip-path="url(#clip0_112_837)">
              <path
                d="M19.5 10.641C19.5 15.6116 15.4706 19.641 10.5 19.641C5.52944 19.641 1.5 15.6116 1.5 10.641C1.5 5.67046 5.52944 1.64102 10.5 1.64102C15.4706 1.64102 19.5 5.67046 19.5 10.641Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.05389 7.19492C7.23122 7.01763 7.51869 7.01763 7.69602 7.19492L10.5 9.99885L13.3039 7.19492C13.4812 7.01763 13.7687 7.01763 13.946 7.19492C14.1234 7.37225 14.1234 7.65979 13.946 7.83712L11.1421 10.641L13.946 13.4449C14.1234 13.6223 14.1234 13.9098 13.946 14.0871C13.7687 14.2644 13.4812 14.2644 13.3039 14.0871L10.5 11.2832L7.69602 14.0871C7.51869 14.2644 7.23122 14.2644 7.05389 14.0871C6.87657 13.9098 6.87657 13.6223 7.05389 13.4449L9.85782 10.641L7.05389 7.83712C6.87657 7.65979 6.87657 7.37225 7.05389 7.19492Z"
                fill="white"
                stroke="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_112_837">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="reels-modal-card-body">
        <div class="reels-modal-card-body-progress">
          <div
            class="reels-modal-card-body-progress-line"
            v-for="(page, index) in slide.pages"
            :key="index"
          >
            <div
              class="reels-modal-card-body-progress-line-time"
              v-if="index < activePageId"
              :style="{ width: '100%' }"
            ></div>
            <div
              class="reels-modal-card-body-progress-line-time"
              v-if="index == activePageId"
              :style="{ width: this.progress + '%' }"
            ></div>
          </div>
        </div>
        <button @click="pause">Pause</button>
        <button @click="play">Play</button>
        <button @click="goToPrevSlide">Prev</button>

        <button @click="prevPage">Prev Page</button>
        <button @click="nextPage">Next Page</button>
        <button @click="goToNextSlide">Next</button>
        <button @click="getP">1</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useSwiperSlide, useSwiper } from "swiper/vue";
import { VIDEO_SOURCE_TYPE, IMAGE_SOURCE_TYPE } from "@/common/constants.js";
import Loader from "@/components/Loader.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";

export default {
  setup() {
    const swiperRef = ref(null);
    const swiper = useSwiper();
    onMounted(() => {
      swiperRef.value = swiper.value;
    });

    const isEndSlide = () => {
      if (swiperRef.value) {
        return swiperRef.value.isEnd;
      }
    };

    const activeSlideIndex = () => {
      if (swiperRef.value) {
        return swiperRef.value.activeIndex;
      }
    };

    const goToNextSlide = () => {
      if (swiperRef.value) {
        swiperRef.value.slideNext();
      }
    };

    const goToPrevSlide = () => {
      if (swiperRef.value) {
        swiperRef.value.slidePrev();
      }
    };

    return {
      goToNextSlide,
      goToPrevSlide,
      isEndSlide,
      activeSlideIndex,
    };
  },
  components: { Loader },
  data() {
    return {
      VIDEO_SOURCE_TYPE: VIDEO_SOURCE_TYPE,
      IMAGE_SOURCE_TYPE: IMAGE_SOURCE_TYPE,

      autoDelay: 5000,
      duration: 0,
      timer: null,
      progress: 0,
      isPause: false,
      activePage: null,
      activePageId: 0,
      maxActivePages: 0,

      videoElement: null,
      keydownHandler: null,

      isLoading: true,
      currentTime: 0,
    };
  },
  computed: {
    swiperSlideState() {
      return useSwiperSlide();
    },
  },

  props: {
    title: String,
    toggleModal: Function,
    slide: Object,
  },
  mounted() {
    this.activePage = this.slide.pages[0];
    this.maxActivePages = this.slide.pages.length;
    this.activePageId = 0;

    if (this.activePage.sourceType != this.VIDEO_SOURCE_TYPE) {
      this.startProgress();
    }

    // Определяем обработчик события и сохраняем его как метод
    this.keydownHandler = (e) => {
      if (e.key === "m") {
        this.nextPage();
      }
      if (e.key === "ArrowLeft") {
        this.prevPage();
      }
      if (e.key === "Escape") {
        this.toggleModal();
      }
      if (e.code === "Space") {
        if (this.isPause) {
          this.play();
        } else {
          this.pause();
        }
      }
    };

    // Добавляем слушатель события
    document.addEventListener("keydown", this.keydownHandler);
  },
  beforeUnmount() {
    this.resetProgress();

    // Удаляем слушатель события при размонтировании
    document.removeEventListener("keydown", this.keydownHandler);
  },
  methods: {
    startProgress() {
      this.timer = setInterval(() => {
        if (
          this.swiperSlideState.value.isActive &&
          !this.isPause &&
          !this.isLoading
        ) {
          if (this.currentTime <= this.autoDelay) {
            this.currentTime += 100;
            this.progress = (this.currentTime / this.autoDelay) * 100;
          }
          if (this.progress >= 100) {
            this.resetProgress();
            this.nextPage();
          }
        }
      }, 100);
    },
    stopProgress() {
      clearInterval(this.timer);
    },
    resetProgress() {
      clearInterval(this.timer);
      this.progress = 0;
      this.currentTime = 0;
      this.duration = 0;
    },
    // delayNextPageOrCloseAlert() {
    //   this.currentTime = setTimeout(() => {
    //     if (this.swiperSlideState.value.isActive) {
    //       this.nextPage();
    //     }
    //   }, this.autoDelay);
    // },
    nextPage() {
      if (this.swiperSlideState.value.isActive) {
        if (this.activePageId < this.maxActivePages - 1) {
          this.activePageId++;
          this.activePage = this.slide.pages[this.activePageId];

          this.currentTime = 0;
          this.progress = 0;
          this.duration = 0;

          this.isLoading = true;

          this.resetProgress();
          if (this.activePage.sourceType != this.VIDEO_SOURCE_TYPE) {
            this.startProgress();

            // this.delayNextPageOrCloseAlert();
          } else {
          }
        } else {
          this.activePageId = 0;
          this.activePage = this.slide.pages[0];

          if (this.isEndSlide()) {
            this.resetProgress();
            this.toggleModal();
          } else {
            this.resetProgress();
            this.goToNextSlide();
          }
        }
      }
    },
    prevPage() {
      if (this.activePageId > 0) {
        this.activePageId--;
        this.activePage = this.slide.pages[this.activePageId];

        this.isLoading = true;

        this.resetProgress();
      } else {
        if (this.activeSlideIndex() !== 0) {
          this.resetProgress();
          this.goToPrevSlide();
        }
      }
    },
    pause() {
      this.stopProgress();
      this.isPause = true;
      if (this.videoElement) {
        this.videoElement.pause();
      }
    },
    play() {
      this.isPause = false;
      if (this.activePage.sourceType != this.VIDEO_SOURCE_TYPE) {
        this.startProgress();
      }
      if (this.videoElement) {
        this.videoElement.play();
      }
    },

    logDuration() {
      if (this.$refs.videoPlayer) {
        this.duration = this.$refs.videoPlayer.duration;
        this.isLoading = false;
      }
    },
    onVideoEnd() {
      this.nextPage();
    },
    updateVideoPaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    },
    updateProgressBar() {
      if (this.$refs.videoPlayer) {
        this.progress =
          (this.$refs.videoPlayer.currentTime /
            this.$refs.videoPlayer.duration) *
          100;
      }
    },
    imageLoaded() {
      this.isLoading = false;
    },
    getP() {
      console.log(this.swiperSlideState.value.isActive);
    },
  },
};
</script>
<style>
.reels-modal-card {
  position: relative;
  width: 100%;
  height: 100%;
}

.reels-modal-card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.reels-modal-card-content img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.reels-modal-card-content video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.reels-modal-card::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0.3%,
      rgba(0, 0, 0, 0) 36.48%
    ),
    transparent 50% / cover no-repeat;
  z-index: 3;
}

.reels-modal-card-overlay {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.reels-modal-card-header {
  display: flex;
  height: 45px;
  padding: 0px 17px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.reels-modal-card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex: 1 0 0;
  align-self: stretch;
}
.reels-modal-card-header-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
}
.reels-modal-card-header-info-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background-color: aquamarine;
}

.reels-modal-card-header-info-block {
  display: flex;
  padding: 3px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
}

.reels-modal-card-header-info-title {
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
}
.reels-modal-card-header-info-createdblock {
  display: flex;
  height: 12px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
.reels-modal-card-header-info-username {
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.reels-modal-card-header-info-date {
  color: #a9a9a9;
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.reels-modal-card-close {
  width: 20px;
  height: 20px;
  opacity: 0.5;
}
.reels-modal-card-close:hover {
  opacity: 1;
  cursor: pointer;
}

.reels-modal-card-body-progress {
  display: flex;
  padding: 0px 17px 9px 17px;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
}

.reels-modal-card-body-progress-line {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  height: 2px;
  border-radius: 95px;
  background: rgba(0, 0, 0, 0.42);
}
.reels-modal-card-body-progress-line-time {
  width: 100%;
  height: 2px;
  background: #d9d9d9;
  transition: width 0.2s linear;
}
</style>
