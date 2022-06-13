<template>
<div>
    <myMenu/>
  <router-view/>
</div>
</template>
<script>
// @ is an alias to /src
import myMenu from '@/components/menu.vue'

export default {
  name: 'HomeView',
  components: {
    myMenu
  }
}
</script>
