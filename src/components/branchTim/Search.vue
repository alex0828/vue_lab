<template>
  <div class="practice">
    <h1>Search</h1>
  </div>
  <input class="search_btn" type="text" placeholder="Search" v-model="inputText"/>
  <div>查詢到{{ findItems.length }}筆資料</div>
  <div>
      <li v-for="item in findItems" :key="item">{{item}}</li>
  </div>
</template>

<script lang="ts">
import {storeToRefs} from 'pinia';
import { userStore } from '@/store/storeTim/timStore.ts';
import { defineComponent, toRefs, ref, computed } from 'vue';
import { filterSearch } from '@/utils/utilsTim/FilterSearch.ts'

export default defineComponent({
  name: 'timSearch',
  setup() {
      const main = storeToRefs(userStore)
      const { projectThree } = main
      const inputText = ref('') //必需加'ref' or 'reactive' 才能呈現出響應是的資料 
    const findItems = filterSearch(inputText, projectThree)

    return {
        inputText,
        main,
        findItems,
        projectThree
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.search_btn{
    width:200px;
    height:40px;
    font-size:16px;
}
</style>
