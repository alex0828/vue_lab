<template>
  <div class="ProjectTwelve">
    <h1>CounterWithState</h1>
    <div class="dg">
      <div class="row-1">
        <p>Count : {{ count }}</p>
      </div>
      <div class="row-2">
        <button @click="clickImp(-1)">
          減 1
        </button>
        <button @click="clickImp(1)">
          加 1
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTwelve'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
