<template>
  <swiper
    :effect="'cards'"
    :modules="modules"
    class="mySwiper"
    :freeMode="false"
    :mousewheel="false"
    :navigation="true"
    draggable="false"
    allowTouchMove="false"
    touchRatio="0"
    @slideChange="activeSlideIndex = $event.realIndex"
  >
    <slot />
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import required modules
import { EffectCards } from "swiper/modules";

import { FreeMode, Mousewheel } from "swiper/modules";
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [
        EffectCards,
        // FreeMode, Mousewheel,
        Navigation,
      ],
    };
  },
  data() {
    return {
      activeSlideIndex: 0, // Инициализируйте индекс активного слайда
    };
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
