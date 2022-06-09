<template>
  <div class="ProjectEleven">
    <h1>ProjectEleven</h1>
    <Carousel :list="Carousel"></Carousel>
  </div>
</template>

<script>
import Carousel from '@/components/praticies/MyCarouselDemo.vue'
export default {
  name: 'ProjectEleven',
  components: {
    Carousel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  text-align: center;
}
</style>
