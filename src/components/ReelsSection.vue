<template>
  <section class="reels">
    <reels-swiper>
      <template v-slot:reel-cards>
        <swiper-slide v-for="(card, index) in reelCards" :key="index" class="swiper-slide">
          <reels-card :title="card.title" />
        </swiper-slide>
      </template>
    </reels-swiper>
  </section>

  <reels-modal></reels-modal>
</template>

<script>
import ReelsSwiper from "./ReelsSwiper.vue";
import ReelsCard from "./ReelsCard.vue";
import { SwiperSlide } from "swiper/vue";
import ReelsModal from "./ReelsModal.vue";

export default {
  components: {
    ReelsSwiper,
    ReelsCard,
    SwiperSlide,
    ReelsModal
},
  data() {
    return {
      reelCards: [
        { title: "Очень длинное название что-то про Иссыкуль" },
        { title: "Card 2" },
        { title: "Card 3" },
        { title: "Card 3" },
        { title: "Card 3" },
        { title: "Card 3" },
        { title: "Card 3" },
        { title: "Card 3" },
        { title: "Card 3" },
        { title: "Card 3" },
        // Add more card objects here
      ],
    };
  },
};
</script>

<style scoped>
section.reels {
  padding-top: 20px;
  width: 100%;
  background-color: #ddd;
}

.swiper-slide {
  display: block;
  width: auto;
}
</style>
