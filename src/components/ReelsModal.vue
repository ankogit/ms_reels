<template>
  <transition name="modal-animation">
    <div v-show="modalActive">
      <div class="reels-modal">
        <div class="reels-modal-light"></div>
          <ReelsModalSlider @slide-change="activeSlideIndex = $event">
            <swiper-slide v-for="i in [1, 2, 3]">
              <reels-modal-card :toggleModal="toggleModal"></reels-modal-card>
            </swiper-slide>
          </ReelsModalSlider>
        </div>
      </div>
  </transition>
</template>

<script>
import ReelsModalSlider from "./ReelsModalSlider.vue";
import ReelsModalCard from "./ReelsModalCard.vue";
import { SwiperSlide } from "swiper/vue";

export default {
  components: {
    ReelsModalSlider,
    ReelsModalCard,
    SwiperSlide,
  },
  props: {
    activeSlideIndex: Number,
    modalActive: Boolean,
    toggleModal: Boolean | Function,
  },
  // setup(props, { emit }) {
  //   const close = () => {
  //     emit("close");
  //   };

  //   return { close };
  // },
  data() {
    return {
      autoDelay: 5000,
      timer: null,
      isPause: false,
      progress: 0,
      video: null,

    };
  },
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
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(37, 37, 37, 0.86);
  backdrop-filter: blur(50px);
  z-index: 1;

  padding-top: 44px;
  padding-bottom: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
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
