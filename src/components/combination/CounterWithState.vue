<template>
  <div class="ProjectTwelve">
    <div class="dg">
      <h1>CounterWithState</h1>
      <div class="row-1">
        <p>Count : {{ count }}</p>
      </div>
      <div class="row-2">
        <button @click="clickImp(-1)">減 1</button>
        <button @click="clickImp(1)">加 1</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/store/storeJf/index.ts";
import { computed } from "vue-demi";
const store = userStore();
const count = computed(() => {
  return store.projectTwelve.count;
});
const clickImp = function (num:number) {
  store.countChangeTwelve(num);
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ProjectTwelve {
  .dg {
    display: grid;
    gap: 10px;
    grid-template-rows: 50px;
    justify-items: center;
  }
  .row-2 {
    display: flex;
    width: 300px;
    justify-content: center;
    button {
      background: #057bff;
      color: #fff;
      padding: 12px;
      border: none;
      border-radius: 4px;
      & + button {
        margin-left: 10px;
      }
    }
  }
}
</style>
