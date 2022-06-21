<template>
  <div class="practice">
    <h1 class="mainTitle">Counter</h1>
  </div>
  <div class="result" >Counter: {{ count.count }}</div>
  <div class="btn">
    <button @click="editValue(-1)">-1</button>
    <button @click="editValue(1)">+1</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref } from 'vue';
import { sumValue } from '@/utils/utilsCombine/Counter.ts'
    const count = reactive({
        count: 0 as number 
    })
    /**
     * @description 計算動態數字的加減法
     * @param {number} 帶入的參數決定加一或減一  
     * @return {number} 加減後的數字結果
     */
    const editValue = function(num : number){
        count.count = sumValue(count.count, num)
    }
</script>

<style scoped>
.mainTitle {
  text-align: center;
}
.result{
    text-align: center;
}
.btn {
    width:120px;
    padding: auto;
  margin: auto;
}
.btn button {
  width: 40px;
  height: 40px;
  padding: 4px;
  margin: 10px;
}
</style>
