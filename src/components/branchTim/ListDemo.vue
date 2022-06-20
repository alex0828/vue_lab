<template>
  <div class="practice">
    <h1>List Demo</h1>
  </div>
  <div class="card" v-for="(item, index) in itemList" :key="item" @click="alertData(item, index)">
      <li class="cardText">{{item}}</li>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { userStore } from '@/store/storeTim/timStore.ts';
import { defineComponent, computed, toRef, reactive } from 'vue';
export default defineComponent({
  name: 'timList',
  setup() {
      const store = userStore()
      const itemList = store.listDemoProject
        const alertData = (value : string, index : number) =>{
            alert('value:' + value + 'index:' + (index + 1))
        }
    return {
        alertData,
        store,
        itemList
    };
  },
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
.card{
    margin:auto;
    margin:20px 20px;
    padding:20px;
    background:rgb(235, 235, 235);
    cursor:pointer;
}
.cardText{
    list-style-type: none;
}


</style>
