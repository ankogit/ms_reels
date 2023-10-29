<template>
  <section class="reels">
    <reels-swiper
      ref="reelsListSlider"
      :activeSlideIndex="activeSlideListIndex"
    >
      <template v-slot:reel-cards>
        <swiper-slide class="swiper-slide" v-if="creationMode">
          <reels-card :creationMode="true" @click="openInNewTab(createLink)" />
        </swiper-slide>
        <swiper-slide
          v-for="(card, index) in reelsSlides"
          :key="index"
          class="swiper-slide"
        >
          <reels-card :slide="card" @click="openModal(index)" />
        </swiper-slide>
      </template>
    </reels-swiper>
  </section>

  <Teleport to="#modals">
    <transition name="modal">
      <reels-modal
        :modalActive="modalActive"
        v-if="modalActive"
        :slides="reelsSlides"
        :activeSlide="activeSlide"
        :slideIndex="activeSliderIndex"
        :closeModal="closeModal"
        :slideChanged="goToSlide"
      ></reels-modal>
      <!-- <div class="test-modal" v-if="modalActive" @click="closeModal"></div> -->
    </transition>
  </Teleport>
</template>

<script>
import ReelsSwiper from "./ReelsSwiper.vue";
import ReelsCard from "./ReelsCard.vue";
import { SwiperSlide } from "swiper/vue";
import ReelsModal from "./ReelsModal.vue";
import { onBeforeMount, onMounted, ref } from "vue";

export default {
  components: {
    ReelsSwiper,
    ReelsCard,
    SwiperSlide,
    ReelsModal,
  },
  props: {
    reelsSlides: {
      type: Array,
      required: true,
    },
    creationMode: false,
    createLink: "",
  },
  setup(props) {
    const reelsListSlider = ref(null);

    const modalActive = ref(false);

    const activeSlideListIndex = ref(0);
    const activeSliderIndex = ref(0);

    const activeSlide = ref(0);
    if (props.reelsSlides.length > 0) {
      if (props.creationMode) {
        activeSlideListIndex.value = activeSlideListIndex.value + 1;
      } else {
        activeSlideListIndex.value = activeSlideListIndex.value;
      }
      activeSlide.value = props.reelsSlides[activeSlideListIndex.value];
    }

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    const closeModal = () => {
      modalActive.value = !modalActive.value;
    };

    const openModal = (index) => {
      activeSlide.value = props.reelsSlides[index];
      if (props.creationMode) {
        activeSlideListIndex.value = index + 1;
        activeSliderIndex.value = index;
      } else {
        activeSlideListIndex.value = index;
        activeSliderIndex.value = index;
      }
      modalActive.value = !modalActive.value;
    };

    const goToSlide = (index) => {
      const swiper = reelsListSlider.value.swiperController;

      if (props.creationMode) {
        activeSlideListIndex.value = index + 1;
      } else {
        activeSlideListIndex.value = index;
      }
      swiper.slideTo(activeSlideListIndex.value);
    };

    const openInNewTab = (url) => {
      window.open(url, "_blank", "noreferrer");
    };
    return {
      onBeforeMount,
      modalActive,
      toggleModal,
      closeModal,
      openModal,
      goToSlide,
      activeSlide,
      activeSliderIndex,
      activeSlideListIndex,
      reelsListSlider,
      openInNewTab,
    };
  },
};
</script>

<style scoped>
section.reels {
  padding-top: 20px;
  width: 100%;
}

.swiper-slide {
  display: block;
  width: auto;
}
.test-modal {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}

section.reels {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

section.reels *,
section.reels *::before,
section.reels *::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

#modals {
  z-index: 10000;
  position: relative;
}

/* Стили для появления */
.modal-enter-active {
  animation: slide-in 0.2s;
}

@keyframes slide-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Стили для исчезновения */
.modal-leave-active {
  animation: slide-out 0.2s;
}

@keyframes slide-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
