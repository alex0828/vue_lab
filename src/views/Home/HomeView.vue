<template>
  <div class="home">
    <h1>home</h1>
    <UserList/>
  </div>
</template>

<script>
import UserList from '@/components/register/getUser.vue'
export default {
  name: 'HomeView',
  components: {
    UserList
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
