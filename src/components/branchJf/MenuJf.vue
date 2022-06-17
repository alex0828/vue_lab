<template>
  <h4>Jeffrey 練習項目清單</h4>
  <div class="list">
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <router-link :to="{ name: 'about' }"> About </router-link>
    <router-link :to="{ name: 'countOneJf' }"> Counter </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "jeffreyMenus",
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