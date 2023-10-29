<script setup>
import { ref } from "vue";
import ReelsSection from "./components/ReelsSection.vue";
const listSlides = ref([]);
listSlides.value = [
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
    preview: "",
    postId: 1,
    pages: [
      {
        id: 1,
        source: "",
        sourceType: "image",
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
</script>

<template>
  <div id="modals"></div>

  <ReelsSection
    :reelsSlides="listSlides"
    :creationMode="true"
    createLink="https://www.youtube.com/watch?app=desktop&v=vkAsNffJ_ZY&ab_channel=%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%BELaravel.CutCode"
  />
  <ReelsSection :reelsSlides="[]" />
  <!-- <ReelsSection /> -->
  <!-- <ReelsSection /> -->
</template>

<style scoped></style>
