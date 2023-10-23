<template>
  <div class="reels-modal-card" v-if="swiperSlideState.value.isActive">
    <div class="reels-modal-card-content">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv34C4rFLqv3I8TFjO00_T_Hp8t2XX_3PhVCei0qfESNt4jojxoU2phU7Jqrw&s"
        alt=""
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
          <div class="reels-modal-card-body-progress-line">
            <div class="reels-modal-card-body-progress-line-time"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { useSwiperSlide } from "swiper/vue";

export default {
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
  computed: {
    swiperSlideState() {
      // Используйте функцию useSwiperSlide для получения состояния SwiperSlide
      return useSwiperSlide();
    },
  },

  props: {
    title: String,
    toggleModal: Boolean | Function,
    // swiperSlideState: Object, // Проп для передачи состояния SwiperSlide
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
  background: #D9D9D9;
}
</style>
