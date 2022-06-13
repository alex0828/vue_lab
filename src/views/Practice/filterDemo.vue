<template>
<div>
    <div class="practice">
        <h1>Filter Demo</h1>
    </div>
    <div class="container">
        <div>
            <input type="number" v-model="inputVal">
        </div>
        <p>轉換後的結果 => {{ filterNumber }}</p>
    </div>
</div>

</template>

<script>
export default {
  name: 'ProjectThree',
  data () {
    return {
      inputVal: ''
    }
  },
  mounted () {
    console.log(this.$store.state.itemList)
  },
  computed: {
    filterNumber () {
      if (this.inputVal === '') {
        return ''
      } else {
        console.log(this.inputVal)
        return this.inputVal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
    }
  }
}
</script>
<style scoped>
input {
    width:100%;
    height:40px;
}
.container{
    margin:auto;
    margin:0 20px;
    padding:20px;
    background:rgb(235, 235, 235);
}
li{
    list-style-type: none;
}
</style>
