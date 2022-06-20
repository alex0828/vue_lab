<template>
  <div class="count">
    <h1>Counter</h1>
    <p>{{ value }}</p>
    <div class="button_wrap">
      <button @click="sumValue(-1)">減少 1</button>
      <button @click="sumValue(1)">增加 1</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const value = ref<number>(0);
const sumValue = function (num: number) {
  value.value += num;
};
</script>
<style scoped lang="scss">
.count {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px;
  gap: 10px;
  p {
    font-size: 32px;
  }
}
</style>