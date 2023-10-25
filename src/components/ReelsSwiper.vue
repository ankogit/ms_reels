<template>
  <swiper
    :centeredSlides="true"
    slidesPerView="auto"
    :spaceBetween="14"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
    :freeMode="true"
    :mousewheel="true"
    watchOverflow
  >
    <slot name="reel-cards"></slot>
    <!-- <swiper-slide v-for="(slide, index) in slides" :key="index">
      <component :is="slide.component" :title="slide.title" />
    </swiper-slide> -->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import { FreeMode, Mousewheel } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    // slides: {
    //   type: Array,
    //   required: true,
    // },
  },
  setup() {
    return {
      modules: [FreeMode, Mousewheel],
    };
  },
};
</script>

<style>
/*  */
</style>
