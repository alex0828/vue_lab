<template>
  <div class="owl-carousel owl-theme" ref="owl">
    <img :src="item.prodImg" alt="" v-for="item of Carousel" :key="item">
  </div>
</template>

<script>
/* eslint-disable */ 
import { projectFirestore } from '@/utils/firebase/config'
export default {
  name: 'CarouselDemo',
  data () {
    return {
      Carousel: []
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    async getList () {
      const vm = this
      try {
        const res = await projectFirestore.collection('list').get()
        if (res.size === 0) {
          throw new Error('資料為空')
        }
        vm.Carousel = res.docs.map(doc => {
          return { ...doc.data() }
        })
        this.$nextTick(()=>{
          $('.owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
          })
          }
        )
      } catch (error) {
        vm.Carousel = { message: error }
      }
    }
  },
  mounted () {
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>

</style>
