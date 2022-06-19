<template>
  <div class="ProjectTen">
    <h1>RefDemo</h1>
    <fieldset>
      <div class="dg">
        <input
          ref="getFocus"
          type="text"
          class="one"
        >
        <button
          class="two"
          @click="setFocus"
        >
          Set Focus
        </button>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
  const getFocus = ref(null)
  const setFocus = function () {
      getFocus.value.focus()
    }
</script>
<style scoped lang="scss">
.dg {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(50px, auto);
  gap: 20px;
  .one{
    grid-column: 1 / 6;
    grid-row: 1;
    height: 80%;
  }
  .two{
    cursor: pointer;
    height: 70%;
    grid-column: 3 / 4;
    border: none;
    border-radius: 4px;
    color: #fff;
    background: #057BFF;
  }
}
</style>
