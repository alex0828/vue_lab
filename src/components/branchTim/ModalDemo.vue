<template>
  <div class="ProjectSeven">
    <h1>Modal Demo</h1>
    <ul class="Modal">
    </ul>
  </div>
</template>

<script lang="ts">
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
.Modal {
  background: #eee;
  padding: 0;
  li {
    padding: 16px;
    list-style: none;
    text-align: center;
  }
  button {
    cursor: pointer;
    background: #057bff;
    border: none;
    color: #fff;
    border-radius: 4px;
    padding: 12px;
  }
}
// componet 內吃不到父層的 css
.button {
  cursor: pointer;
  padding: 8px;
  background: #057bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}
</style>
