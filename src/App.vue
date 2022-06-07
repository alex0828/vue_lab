<template>
<div>
  <ProjectMenu :menu="menuList" />
  <RouterViewContent />
</div>
</template>

<script>
import RouterViewContent from './views/MyIndex'
import ProjectMenu from '@/components/praticies/ProjectMenu'
export default {
  components: {
    RouterViewContent,
    ProjectMenu
  },
  data () {
    return {
      menuList: [
        'Home',
        'About',
        'MyPratice'
      ]
    }
  }
}
</script>
<style lang="scss">
#app {
  position: relative;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
