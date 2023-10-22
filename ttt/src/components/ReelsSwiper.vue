<template>
    <swiper
        :slidesPerView="4"
        :centeredSlides="true"
        :spaceBetween="30"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper"
        :freeMode="true"
        :mousewheel="true"
    >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
            {{ slide }}
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import { FreeMode, Mousewheel } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        slides: {
            type: Array,
            required: true,
        },
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
  