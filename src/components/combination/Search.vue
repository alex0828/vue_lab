<template>
  <div class="practice">
    <h1 class="mainTitle">Search</h1>
  </div>
  <div class="searchCard">
      <input class="searchBtn" type="text" placeholder="Search" v-model="inputText"/>
      <div id="resultDetail">查詢到{{ findItems.length }}筆資料</div>
      <div class="result">
          <li class="item" v-for="item in findItems" :key="item">{{item}}</li>
      </div>
  </div>
</template>

<script lang="ts">
import { userStore } from "@/store/storeCombine/index.ts";
import { defineComponent, toRefs, ref, computed } from 'vue';
import { filterSearch } from '@/utils/utilsCombine/FilterSearch.ts'

export default defineComponent({
  name: 'combineSearch',
  setup() {
      const store = userStore();
      const inputText = ref('') 
    const findItems = computed(()=>{
        return filterSearch(inputText.value, store.filterSearchProject)

    })

    return {
        inputText,
        findItems
    };
  }
});
</script>

<style scoped>
.mainTitle {
  text-align: center;
}
.searchCard{
    height:auto;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#eee;
    padding:12px;
    margin:12px;
}
.result{
    width:96%;
    background-color:rgb(255, 255, 255);
    margin:auto;
    margin-top:20px;
    text-align: center;
}
.item{
    list-style-type:none;
    border:1px solid #eee;
    padding:12px;
}
#resultDetail{
    width:96%;
    margin:auto;
    margin-top:20px;
}
.searchBtn{
    width:96%;
    height:40px;
    font-size:16px;
    margin:auto;
}

</style>
