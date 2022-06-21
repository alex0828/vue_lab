<template>
  <div class="practice">
    <h1 class="mainTitle">Filter Demo</h1>
  </div>
  <div class="filterCard">
      <input class="search_btn" type="number" v-model="inputNumber"/>
      <h3 class="result">轉換後的數字： {{filterNumber}}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'timFilter',
  setup() {
      const inputNumber = ref<number | string>('') 

    //https://5xruby.tw/posts/15min-regular-expression  
    const filterNumber = computed(()=>{
        return inputNumber.value === '' ? '' : inputNumber.value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    })

    return {
        inputNumber,
        filterNumber
    };
  },
});
</script>

<style scoped>
.mainTitle {
  text-align: center;
}
.filterCard{
    height:auto;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#eee;
    padding:12px;
    margin:12px;
}
.search_btn{
    width:96%;
    margin:auto;
    height:40px;
    font-size:16px;
}
.result{
    width:96%;
    margin:20px auto 12px auto;
}
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
