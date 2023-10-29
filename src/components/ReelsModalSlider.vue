<template>
  <swiper
    ref="mySwiper"
    :effect="'cards'"
    :modules="modules"
    class="mySwiper"
    :freeMode="false"
    :mousewheel="false"
    draggable="false"
    @slideChange="handleSlideChange"
    @swiper="onSwiper"
    :initialSlide="activeSlideIndex"
  >
    <slot />
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { EffectCards } from "swiper/modules";
// import { FreeMode, Mousewheel } from "swiper/modules";
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    activeSlideIndex: 0,
  },
  setup() {
    return {
      modules: [
        EffectCards,
        // , FreeMode, Mousewheel
      ],
    };
  },

  data() {
    return {
      swiper: null,
      activeSlideKey: null, // Ключ активного слайда
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    handleSlideChange(slideData) {
      this.$emit("slide-changed", slideData);
    },
    goToSlide(index) {
      this.swiper.slideTo(index);
    },
  },
};
</script>

<style scoped>
.swiper {
  max-width: 482px;
  max-height: 738px;
  width: 100%;
  height: 100%;
}
</style>
