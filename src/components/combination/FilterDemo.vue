<template>
  <div class="practice">
    <h1>Filter Demo</h1>
  </div>
  <input class="search_btn" type="number" v-model="inputNumber"/>
  <h2>轉換後的數字： {{filterNumber}}</h2>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'timFilter',
  setup() {
      const inputNumber = ref<number | string>('') 
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
h1 {
  text-align: center;
}
.search_btn{
    width:200px;
    height:40px;
    font-size:16px;
}
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
