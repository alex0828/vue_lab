<template>
<div>
    <div class="practice">
        <h1>List Demo</h1>
    </div>
    <div class="container">
        <li v-for="(item, index) in itemList" :key="item" @click="clickAlert(item, index)">
            {{item}}
        </li>
    </div>
</div>

</template>

<script>
export default {
  name: 'ProjectThree',
  data () {
    return {
      itemList: ['AAA', 'BBB', 'CCC']
    }
  },
  methods: {
    clickAlert (item, index) {
      alert('index:' + (index + 1) + ',' + 'value:' + item)
    }
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
    margin-top:20px;
    margin:auto;
}
li{
    list-style-type: none;
    margin:20px 0;
    padding:20px 0;
    border-top:solid rgb(178, 178, 178) 1px;
    border-bottom:solid rgb(178, 178, 178) 1px;
    cursor: pointer;
}
</style>
