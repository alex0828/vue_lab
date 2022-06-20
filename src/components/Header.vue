<template>
  <nav>
    <router-link
      v-for="item of menu"
      :key="item"
      :to="{ name: item }"
    >
      {{ item }}
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'ProjectHeader',
  props:['menu']
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 30px;
  background: #eee;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &+a::before{
        content:"|";
        padding: 0 10px;
        color: #000;
    }
  }

}
</style>
