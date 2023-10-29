<template>
  <swiper
    :centeredSlides="true"
    slidesPerView="auto"
    :spaceBetween="10"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
    :freeMode="true"
    :mousewheel="true"
    watchOverflow
    ref="swiperListRef"
    @swiper="onSwiper"
    :initialSlide="activeSlideIndex"
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
import { ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    activeSlideIndex: 0,
    // slides: {
    //   type: Array,
    //   required: true,
    // },
  },
  setup() {
    const swiperController = ref(null);
    const onSwiper = (swiper) => {
      console.log("swiper", swiper);
      swiperController.value = swiper;
    };
    const swiperListRef = ref(null); // Создаем ref для Swiper

    return {
      modules: [FreeMode, Mousewheel],

      swiperListRef,
      swiperController,
      onSwiper,
    };
  },
};
</script>

<style>
/*  */
</style>
