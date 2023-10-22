<template>
  <div class="reels-modal">
    <div class="reels-modal-light"></div>
    <div class="reels-modal-inner">
      <div class="reels-modal-content">
        <ReelsModalSlider />
      </div>
    </div>
  </div>
</template>

<script>
import ReelsModalSlider from './ReelsModalSlider.vue';

export default {
  components: {
    ReelsModalSlider
},
};
</script>

<style>
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
}
.reels-modal-inner {
  max-width: 500px;
  margin: 2em auto;
}
</style>
