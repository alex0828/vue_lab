<template>
  <div>
    <!-- 定錨到主畫面 -->
    <teleport v-if="isOpenState" to="#app">
      <div class="black">
        <div class="container">
          <h4>Demo Modal</h4>
          <hr />
          <!-- 父層級傳入 slot -->
          <div class="inner">
            <slot />
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/store/storeJF/index.ts";
import { computed, ref } from "vue";
const store = userStore();
const isOpenState = computed(() => {
  return store.projectLight.lightBoxShowSeven;
});
</script>

<style lang="scss" scoped>
h4 {
  text-align: center;
}
.black {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.541);
  .container {
    background: #fff;
    width: 50%;
    padding: 8px;
    border-radius: 8px;
    .inner {
      display: grid;
      gap: 10px;
      grid-template-rows: auto;
      justify-content: center;
    }
  }
}
</style>
