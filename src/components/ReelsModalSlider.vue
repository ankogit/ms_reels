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
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";
import 'swiper/css/navigation';

// import required modules
import { EffectCards } from "swiper/modules";

import { FreeMode, Mousewheel } from "swiper/modules";
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    
  },
  setup() {
    return {
      modules: [EffectCards,
      // FreeMode, Mousewheel,
       Navigation
    ],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 482px;
  height: 738px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide {
  background: url('https://media.istockphoto.com/id/165966377/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%8E-king-size-%D0%BA%D0%B8%D0%BD%D0%B3-%D1%81%D0%B0%D0%B9%D0%B7-%D0%B8-queen-of-hearts-%D0%B8%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%BA%D0%B0%D1%80%D1%82%D1%8B.jpg?s=612x612&w=0&k=20&c=iurYQ_RGC6QykFq45brG4IWSbtc63epsa-uKGjmN33Y=');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
