<template>
    <div>
        <div class="counter-box">
          <div class="num">{{ count }}</div>
          <button @click="increase">+</button>
          <button @click="reduce">-</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CounterItem',
  methods: {
      increase(){
        this.$store.dispatch('incrementCount')
      },
      reduce(){        
        this.$store.dispatch('reduceCount')
      }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
};
</script>

<style scoped lang="scss">
.counter-box{
  width: 110px;
  margin: 0 auto;
  text-align: center;
  padding: 15px 5px;
  background-color: #ddd;
  border-radius: 8px;
  .num{
    font-size: 30px;
  }
  button{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 25px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 8px 5px 5px 5px;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>