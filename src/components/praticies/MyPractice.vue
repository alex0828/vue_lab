<template>
  <div>
    <h4>練習項目清單</h4>
    <div class="list">
      <router-link :to="{ name: 'Home' }">
        Home
      </router-link>
      <router-link :to="{ name: 'ProjectTwo' }">
        Counter
      </router-link>
      <router-link :to="{ name: 'ProjectThree' }">
        Search
      </router-link>
      <router-link :to="{ name: 'ProjectFour' }">
        Filter Demo
      </router-link>
      <router-link :to="{ name: 'ProjectFive' }">
        listDemo
      </router-link>
      <router-link :to="{ name: 'ProjectSeven' }">
        ModalDemo
      </router-link>
      <router-link :to="{ name: 'ProjectEight' }">
        Register
      </router-link>
      <router-link :to="{ name: 'ProjectNine' }">
        AjaxDemo
      </router-link>
      <router-link :to="{ name: 'ProjectTen' }">
        RefDemo
      </router-link>
      <router-link :to="{ name: 'ProjectEleven' }">
        project-11
      </router-link>
      <router-link :to="{ name: 'ProjectTwelve' }">
        CounterWithState
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myPratice'
}
</script>

<style lang="scss" scoped>
h4{
  display: flex;
  justify-content: center;
}
.list{
  display: grid;
  width: 60%;
  margin: 20px auto;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
  a{
    padding: 15px;
    text-decoration: none;
    color: #000;
    border: 1px solid #ccc;
    &:hover{
      color: aquamarine;
    }
  }
}
</style>
