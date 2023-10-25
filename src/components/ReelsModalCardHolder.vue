<template>
  <div style="width: 100%; height: 100%" v-if="activeSlideIndex === slideIndex">
    <test
      :slide="slide"
      :slideIndex="slideIndex"
      :activeSlideIndex="activeSlideIndex"
      :toggleModal="toggleModal"
    />
  </div>
  <!-- <reels-modal-card
    :toggleModal="toggleModal"
    :slide="slide"
    :activeSlideIndex="activeSlideIndex"
    :slideIndex="slideIndex"
    v-if="activeSlideIndex === slideIndex"
  ></reels-modal-card> -->
</template>
<!-- v-if="activeSlideIndex === slideIndex" -->

<script setup>
import { SwiperSlide } from "swiper/vue";
import ReelsModalCard from "./ReelsModalCard.vue";
import Test from "./Test.vue";

const props = defineProps({
  toggleModal: Function,
  slide: Object,
  slideIndex: Number,
  activeSlideIndex: Number,
});
</script>
