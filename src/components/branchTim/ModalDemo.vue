<template>
  <div class="ProjectSeven">
    <h1>Modal Demo</h1>
    <ul class="Modal">
      <li>
        <button @click="lightBoxChange">Open PopupModal</button>
      </li>
    </ul>
    <PopupModal>
      <!-- 主要內容區塊注入 -->
      <p>Woohoo,you're reading this text in a modal!</p>
      <button class="button" @click="lightBoxChange">Close PopupModal</button>
    </PopupModal>
  </div>
</template>

<script lang="ts" setup>
import PopupModal from "@/components/branchTim/PopupModal.vue";
import { userStore } from "@/store/storeJf/index.ts";
const store = userStore();
const lightBoxChange = function () {
  store.lightBoxSevenChange();
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
.Modal {
  background: #eee;
  padding: 0;
  li {
    padding: 16px;
    list-style: none;
    text-align: center;
  }
  button {
    cursor: pointer;
    background: #057bff;
    border: none;
    color: #fff;
    border-radius: 4px;
    padding: 12px;
  }
}
// componet 內吃不到父層的 css
.button {
  cursor: pointer;
  padding: 8px;
  background: #057bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}
</style>
