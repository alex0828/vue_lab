<template>
  <h4>練習項目清單</h4>
  <div class="list">
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <router-link :to="{ path: 'counter' }"> Counter </router-link>
    <router-link :to="{ path: 'search' }"> Search </router-link>
    <router-link :to="{ path: 'filterDemo' }"> FilterDemo </router-link>
    <router-link :to="{ path: 'listDemo' }"> ListDemo </router-link>
    <router-link :to="{ path: 'register' }"> Register </router-link>
    <router-link :to="{ path: 'modalDemo' }"> ModalDemo </router-link>
    <router-link :to="{ path: 'ajaxDemo' }"> AjaxDemo </router-link>
    <router-link :to="{ path: 'refDemo' }"> RefDemo </router-link>
    <router-link :to="{ path: 'carouselDemo' }"> CarouselDemo </router-link>
    <router-link :to="{ path: 'counterWithState' }"> CounterWithState </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "menuscom",
  setup() {},
});
</script>
<style lang="scss" scoped>
h4 {
  display: flex;
  justify-content: center;
}
.list {
  display: grid;
  width: 60%;
  margin: 20px auto;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  a {
    padding: 15px;
    text-decoration: none;
    color: #000;
    border: 1px solid #ccc;
    &:hover {
      color: aquamarine;
    }
  }
}
</style>