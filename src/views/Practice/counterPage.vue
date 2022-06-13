<template>
<div>
    <div class="practice">
        <h1>Counter</h1>
      </div>
    <div>Counter: {{ count }}</div>
      <div class="btn">
        <button @click="dec">-1</button>
        <button @click="inc">+1</button>
      </div>
</div>

</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const count = ref(0)
    const inc = function () {
      this.count++
    }
    const dec = function () {
      this.count -= 1
    }

    return {
      dec,
      inc,
      count
    }
  }
}
</script>
<style scoped>
    .btn{
        margin:10px;
    }
    .btn button{
        width:40px;
        height:40px;
        padding:4px;
        margin:10px;
    }
</style>
