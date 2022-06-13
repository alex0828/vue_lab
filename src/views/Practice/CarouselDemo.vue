<template>
  <div>
    <div>
      <h1>Carousel Demo</h1>
    </div>
    <div class="container">
      <div class="carousel owl-carousel owl-theme" ref="owl">
          <div v-for="item in imgList" :key="item">
              <img :src="item.prodImg" alt="" style="height:200px; object-fit: cover;">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  name: 'CarouselDemo',
  data(){
      return {
          imgList:[]
      }
  },
  created () {
      this.getAssetsList()
        // this.move()
  },
  methods: {
    move () {
      $('.carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
      })
    },
    async getAssetsList () {
      const { data } = await axios.get('/product/list')
      this.imgList = data.data
      this.$nextTick(() => {
          $('.carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
      })
      })
      console.log(this.imgList)
    },
  }
}
</script>
<style scoped>
input {
  width: 100%;
  height: 40px;
}
.container {
  margin: auto;
  margin: 0 20px;
  padding: 20px;
  background: rgb(235, 235, 235);
}
.btn{
    margin-top:20px;
    width:200px;
    height:64px;
    background-color:rgb(33, 83, 218);
    color:white;
    border-radius: 4px;
    border: 0;
    font-size:16px;
    cursor:pointer;
}
.carousel{
    display:flex;
    width:100%;
    overflow-y: scroll;
}
.carousel div img{
    width:100%;
    height:100%;
}
</style>
