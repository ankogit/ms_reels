<template>
  <div style="width: 100%; height: 100%" v-if="activeSlideIndex === slideIndex">
    <ReelsModalCard
      :slide="slide"
      :slideIndex="slideIndex"
      :activeSlideIndex="activeSlideIndex"
      :closeModal="closeModal"
    />
  </div>
</template>

<script setup>
import ReelsModalCard from "./ReelsModalCard.vue";

const props = defineProps({
  closeModal: Function,
  slide: Object,
  slideIndex: Number,
  activeSlideIndex: Number,
});
</script>
