<template>
  <div>
    <div>
      <h1>Ref Demo</h1>
    </div>
    <div class="container">
      <div>
        <input type="text" ref="inputPlace"/>
      </div>
      <button class="btn" @click="focus">Set focus</button>
    </div>
  </div>
</template>
<script>
import { defineComponent} from 'vue';
export default defineComponent({
  name: 'RefDemo',
  setup(){
      const focus = function(){
          this.$refs.inputPlace.focus()
      }
      return {
          focus
      }
  }
})
</script>
<style scoped>
input {
  width: 100%;
  height: 40px;
}
.container {
  margin: auto;
  margin: 0 20px;
  padding: 20px;
  background: rgb(235, 235, 235);
}
h1 {
  text-align: center;
}
.btn{
    margin-top:20px;
    width:200px;
    height:64px;
    background-color:rgb(33, 83, 218);
    color:white;
    border-radius: 4px;
    border: 0;
    font-size:16px;
    cursor:pointer;
}
</style>
