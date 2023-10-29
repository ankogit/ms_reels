<template>
  <!-- <Teleport to="#modals"> -->
  <!-- <transition name="modal-animation"> -->
  <div v-if="modalActive">
    <div class="reels-modal">
      <div class="reels-modal-close" @click="closeModal"></div>
      <div class="reels-modal-light"></div>
      <ReelsModalSlider
        @slide-changed="handleSlideChanged"
        :activeSlideIndex="activeSlideIndex"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <reels-modal-card-holder
            :closeModal="closeModal"
            :slide="slide"
            :slideIndex="index"
            :activeSlideIndex="activeSlideIndex"
          ></reels-modal-card-holder>
        </swiper-slide>
      </ReelsModalSlider>
    </div>
  </div>
  <!-- </transition> -->
  <!-- </Teleport> -->
</template>

<script>
import ReelsModalSlider from "./ReelsModalSlider.vue";
import ReelsModalCardHolder from "./ReelsModalCardHolder.vue";
import { SwiperSlide } from "swiper/vue";

export default {
  components: {
    ReelsModalSlider,
    SwiperSlide,
    ReelsModalCardHolder,
  },
  props: {
    modalActive: Boolean,
    closeModal: Boolean | Function,
    slides: Array,
    activeSlide: null,
    slideIndex: 0,
    slideChanged: Function,
  },
  methods: {
    handleSlideChanged(slideData) {
      this.activeSlideIndex = slideData.activeIndex;
      this.slideChanged(slideData.activeIndex);
    },
  },
  beforeMount() {
    this.activeSlideIndex = this.slideIndex;
    console.log(
      "this.activeSlideIndex",
      this.activeSlideIndex,
      this.slideIndex
    );
  },
  // setup() {
  //   const swiperRef = ref(null);
  //   const swiper = useSwiper();
  //   onMounted(() => {
  //     // swiperRef.value = swiper.value;
  //     // console.log(swiperRef.value);
  //   });
  // },
  // setup(props, { emit }) {
  //   const close = () => {
  //     emit("close");
  //   };

  //   return { close };
  // },
  data() {
    return {
      activeSlideIndex: 0,
    };
  },
  // methods: {
  //   openModal() {
  //     this.isModalOpen = true;
  //     this.modalTimeout = setTimeout(() => {
  //       this.closeModal();
  //     }, 5000); // Закрыть модальное окно через 5 секунд
  //   },
  //   closeModal() {
  //     this.isModalOpen = false;
  //     clearTimeout(this.modalTimeout);
  //   },
  // },
};
</script>

<style scoped>
.reels-modal-light {
  content: "";
  position: absolute;
  width: 50%;
  height: 50px;
  bottom: -20px;
  background: #2980b9;
  mix-blend-mode: screen;
  filter: blur(50px);
  left: 20%;
  z-index: -10;
  border-radius: 50%;
}
.reels-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* width: 100vw;
  height: 100vh; */
  overflow: hidden;
  background: rgba(37, 37, 37, 0.86);
  backdrop-filter: blur(50px);
  z-index: 100;

  padding-top: 44px;
  padding-bottom: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.reels-modal-close {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide {
  background: #2d2d2d;
}
</style>
