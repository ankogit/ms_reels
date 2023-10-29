<template>
  <section class="reels">
    <reels-swiper ref="reelsListSlider">
      <template v-slot:reel-cards>
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
        :slideIndex="activeSlideIndex"
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
import { ref } from "vue";

export default {
  components: {
    ReelsSwiper,
    ReelsCard,
    SwiperSlide,
    ReelsModal,
  },
  // props: {
  //   reelsSlides: Array
  // },
  setup(props) {
    const reelsListSlider = ref(null);

    const reelsSlides = ref([]);
    reelsSlides.value = [
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },

          {
            id: 3,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },

          {
            id: 4,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },

          {
            id: 5,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },

          {
            id: 6,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 2,
        user: {
          id: 1,
          username: "anko",
          avatar: "",
        },
        title: "Card 2",
        preview:
          "https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg",

        postId: 2,

        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            sourceType: "video",
            created_at: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
            sourceType: "video",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
          {
            id: 3,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
            sourceType: "video",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
      {
        id: 1,
        user: {
          id: 1,
          username: "anko",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyBQDPbrs0KAA9ahYQAkRT9CCw1CZuz-lXQ&usqp=CAU",
        },
        title: "Очень длинное название что-то про Иссыкуль",
        preview: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
        postId: 1,
        pages: [
          {
            id: 1,
            source:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            sourceType: "video",
            createdAt: "2021-08-01T12:00:00.000Z",
            description: "Очень длинное название что-то про Иссыкуль",
          },
          {
            id: 2,
            source: "https://samplelib.com/lib/preview/mp4/sample-10s.jpg",
            sourceType: "image",
            createdAt: "2022-08-01T11:00:00.000Z",
            description: "",
          },
        ],
      },
    ];
    const modalActive = ref(false);

    const activeSlideIndex = ref(0);
    const activeSlide = ref(reelsSlides[activeSlideIndex.value]);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    const closeModal = () => {
      modalActive.value = !modalActive.value;
    };

    const openModal = (index) => {
      activeSlide.value = reelsSlides[index];
      activeSlideIndex.value = index;
      modalActive.value = !modalActive.value;
    };

    const goToSlide = (index) => {
      const swiper = reelsListSlider.value.swiperController;
      swiper.slideTo(index);
    };

    return {
      reelsSlides,
      modalActive,
      toggleModal,
      closeModal,
      openModal,
      goToSlide,
      activeSlide,
      activeSlideIndex,
      reelsListSlider,
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
