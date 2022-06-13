<template>
  <div>
      <div class="practice">
        <h1>Practice List</h1>
      </div>
      <ul class="practiceList">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/counter">Counter</router-link></li>
        <li><router-link to="/search">Search</router-link></li>
        <li><router-link to="/filterDemo">FilterDemo</router-link></li>
        <li><router-link to="/listDemo">ListDemo</router-link></li>
        <li><router-link to="/modalDemo">ModalDemo</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/ajaxDemo">AjaxDemo</router-link></li>
        <li><router-link to="/refDemo">RefDemo</router-link></li>
        <li><router-link to="/carouselDemo">CarouselDemo</router-link></li>
        <li><router-link to="/counterWithState">CounterWithState</router-link></li>
      </ul>
  </div>
</template>
<style scoped>
.practiceList {
  width: 300px;
  margin: auto;
}
li {
  list-style-type: none;
  margin: 10px 0;
}
</style>
