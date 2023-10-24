<template>
  <div class="loader-container">
    <div class="spinner">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="bar8"></div>
      <div class="bar9"></div>
      <div class="bar10"></div>
      <div class="bar11"></div>
      <div class="bar12"></div>
    </div>
  </div>
</template>

<style>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* The actual loader */
div.spinner {
  position: absolute;
  width: 50px;
  height: 50px;
}

/* The actual bars of the spinner */
div.spinner div {
  position: absolute;
  top: 38%;
  left: 48%;
  width: 6%;
  height: 24%;
  background: #fff;
  opacity: 1;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}
div.spinner div.bar1 {
  transform: rotate(0deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -1s;
}
div.spinner div.bar2 {
  transform: rotate(30.17deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.91666667s;
}
div.spinner div.bar3 {
  transform: rotate(60.34deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.83333333s;
}
div.spinner div.bar4 {
  transform: rotate(90.51deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.75s;
}
div.spinner div.bar5 {
  transform: rotate(120.68deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.66666667s;
}
div.spinner div.bar6 {
  transform: rotate(150.85deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.58333333s;
}
div.spinner div.bar7 {
  transform: rotate(181.02deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.5s;
}
div.spinner div.bar8 {
  transform: rotate(211.19deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.41666667s;
}
div.spinner div.bar9 {
  transform: rotate(241.36deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.33333333s;
}
div.spinner div.bar10 {
  transform: rotate(271.53deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.25s;
}
div.spinner div.bar11 {
  transform: rotate(301.7deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.16666667s;
}
div.spinner div.bar12 {
  transform: rotate(331.87deg) translate(0, -130%);
  animation: fade 1s linear infinite;
  animation-delay: -0.08333333s;
}
/* Define the animation */
@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}
</style>
