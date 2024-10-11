<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['carousel-item', { active: index === activeIndex }]"
      >
        <img :src="item.image" :alt="item.title" class="d-block w-100" />
      </div>
    </div>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from './FooterComponent.vue';

export default {

  name: "HomeComponent",
  components:{
  FooterComponent
},
  data() {
    return {
      items: [
        {
          image: "https://oqvestir.fbitsstatic.net/media/topo_mobile_marca_nike.jpg?v=202409110959",
          title: "Nike",
          description: "Tenis Nike",
        },
        {
          image: "https://streetflowbr.com/wp-content/uploads/2024/04/nike-2024-olympics-footwear-collection-14-800x400.jpg",
          title: "Slide 2",
          description: "Description for Slide 2",
        },
        {
          image: "https://oqvestir.fbitsstatic.net/media/topo_mobile_marca_adidas.jpg?v=202409200919",
          title: "Slide 3",
          description: "Description for Slide 3",
        },
      ],
      activeIndex: 0,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.autoSlideInterval);
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.items.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    }
  }
};


</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
}
.carousel-inner {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.carousel-item {
  display: none;
  flex: 0 0 100%;
  transition: transform 0.5s ease;
}
.carousel-item.active {
  display: block;
}
</style>