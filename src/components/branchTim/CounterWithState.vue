<template>
  <div class="practice">
    <h1>Counter</h1>
  </div>
  <div>Counter: {{ count }}</div>
  <div class="btn">
    <button @click="decrease">-1</button>
    <button @click="increase">+1</button>
  </div>
</template>
<script>

import {storeToRefs} from 'pinia';
import { userStore } from '@/store/storeTim/timStore.ts';
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'RefDemo',
  setup(){
      const store = userStore()
      const count = computed(()=>{
          return store.count
      })
      const increase = function(){
          store.increase()
          },
      const decrease = function(){
          store.decrease()
          }

      return {
          count,
          increase,
          decrease
      }
  }
})
</script>
<style scoped>
</style>
