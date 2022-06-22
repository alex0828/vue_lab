<template>
  <h4>Timothy 練習項目清單</h4>
  <div class="list">
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <router-link :to="{ path: 'timCounter' }"> Counter </router-link>
    <router-link :to="{ path: 'timSearch' }"> Search </router-link>
    <router-link :to="{ path: 'timFilterDemo' }"> FilterDemo </router-link>
    <router-link :to="{ path: 'timListDemo' }"> ListDemo </router-link>
    <router-link :to="{ path: 'timModalDemo' }"> ModalDemo </router-link>
    <router-link :to="{ path: 'timRegister' }"> Register </router-link>
    <router-link :to="{ path: 'timAjaxDemo' }"> AjaxDemo </router-link>
    <router-link :to="{ path: 'timRefDemo' }"> RefDemo </router-link>
    <router-link :to="{ path: 'timCarouselDemo' }"> CarouselDemo </router-link>
    <router-link :to="{ path: 'timCounterWithState' }"> CounterWithState </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "timMenu",
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