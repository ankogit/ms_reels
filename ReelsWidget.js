import Vue from 'vue';
import ReelsSection from '.src/components/ReelsSection.vue'; // Подставьте правильный путь к файлу ReelsSection.vue

// Создайте компонент ReelsWidget, используя ReelsSection внутри
const ReelsWidget = Vue.extend({
  components: {
    'reels-section': ReelsSection,
  },
  props: ['reelsSlides'],
  data() {
    return {
      // Дополнительные данные вашего виджета, если необходимо
    };
  },
  // Определите дополнительные методы, если необходимо
});

export default ReelsWidget;