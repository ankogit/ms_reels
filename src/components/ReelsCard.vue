<template>
  <div class="card">
    <!-- <img :src="imageSrc" alt="Card image"> -->
    <div class="card-body">
      <div class="card-body-container">
        <img
          src="https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg"
          alt=""
        />
        <div class="card-body-avatar">
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <div class="card-title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<style>
.card {
  display: flex;
  width: 144px;
  height: 230px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.card-body {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  border: 2px solid #2980b9;
  background-color: #ffffff;
  border-radius: 13px;
  position: relative;
  overflow: hidden;
  padding: 3px;
}

.card-body-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* flex-shrink: 0; */
  border-radius: 11px;
  background-color: #ddd;
  overflow: hidden;
  position: relative;
}
.card-body-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 13.3%,
      rgba(0, 0, 0, 0) 86.48%
    ),
    transparent 50% / cover no-repeat;
  z-index: 1;
}
.card-body-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 11px; */
  max-width: 100%;
  /* height: auto; */
}
.card-title {
  height: 60px;
  color: #818181;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 10px;
}
.card-body-avatar {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 5;
}
</style>
