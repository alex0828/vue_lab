<template>
  <div class="practice">
    <h1 class="mainTitle">Search</h1>
  </div>
  <div class="searchCard">
      <input class="search_btn" type="text" placeholder="Search" v-model="inputText"/>
      <div>查詢到{{ findItems.length }}筆資料</div>
      <div>
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
      const inputText = ref('') //必需加'ref' or 'reactive' 才能呈現出響應是的資料 
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
    width:300px;
    height:auto;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.item{
    list-style-type:none;
}
.search_btn{
    width:200px;
    height:40px;
    font-size:16px;
    margin:auto;
}

</style>
