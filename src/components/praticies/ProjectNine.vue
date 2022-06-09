<template>
  <div class="ProjectNine">
    <h1>AjaxDemo</h1>
    <getCartList/>
  </div>
</template>

<script>
import getCartList from '@/components/Cart/getCartList.vue'
export default {
  name: 'ProjectNine',
  components: {
    getCartList
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  text-align: center;
}
</style>
