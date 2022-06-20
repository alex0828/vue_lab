<template>
  <div class="ProjectThree">
    <h1>Search</h1>
    <ul class="filterData">
      <li>
        <input v-model="filter" type="text" placeholder="搜尋文字 ..." />
      </li>
      <li>目前有 {{ afterFilter.length }} 筆資料</li>
      <li v-for="item of afterFilter" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { userStore } from "@/store/storeJf/index.ts";
import { filterArraySearch } from "@/utils/utilsJf/FilterSearch.ts";
import { computed, ref } from "vue";
const store = userStore();
const filter = ref<string>("");
const afterFilter = computed(() => {
  return filterArraySearch(filter.value,store.projectThree)
});
</script>
<style scoped lang="scss">
.ProjectThree {
  h1 {
    text-align: center;
  }
}
.filterData {
  background: #eee;
  margin: 16px;
  padding: 8px 16px;
  li {
    list-style: none;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    padding: 15px 10px;
    border: 1px solid rgb(234, 234, 234);
    input {
      box-sizing: border-box;
      width: 100%;
      background: #fff;
      padding: 15px 10px;
      border: 1px solid rgb(177, 177, 177);
      border-radius: 4px;
      &:focus {
        border: 1px solid rgb(138, 138, 138);
      }
    }
  }
  li:nth-child(1) {
    padding: 0;
  }
  li:nth-child(2) {
    padding-left: 0;
    background-color: #eee;
  }
}
</style>
