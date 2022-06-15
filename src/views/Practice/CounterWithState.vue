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
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    dec () {
      this.$store.commit('dec')
    },
    inc () {
      this.$store.commit('inc')
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
