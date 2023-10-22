<script setup lang="ts">
import { ref } from 'vue'
import ReelsSwiper from './ReelsSwiper.vue';
import ReelsCard from './ReelsCard.vue';

defineProps({
  msg: String,
})

const slides = [
  <ReelsCard title='Test'/>,
  <ReelsCard title='Test2'/>,
]
</script>

<template>
    <ReelsSwiper :slides="slides" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
