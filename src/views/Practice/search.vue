<template>
<div>
    <div class="practice">
        <h1>Search</h1>
    </div>
    <div class="container">
        <div>
            <input type="text" v-model="searchVal">
        </div>
        <p>目前有{{findItem.length }}筆資料</p>
        <div>
            <li v-for="item in findItem" :key="item">
                {{item}}
            </li>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'ProjectThree',
  data () {
    return {
      searchVal: ''
    }
  },
  mounted () {
    console.log(this.$store.state.itemList)
  },
  computed: {
    findItem () {
      return this.$store.state.itemList.filter((item) =>
        item.toLowerCase().includes(this.searchVal.toLowerCase()))
    }
  }
}
</script>
<style scoped>
input {
    width:200px;
    height:32px;
}
.container{
    margin:auto;
    width:300px;
    padding:20px;
    background:rgb(235, 235, 235);
}
li{
    list-style-type: none;
}
</style>
