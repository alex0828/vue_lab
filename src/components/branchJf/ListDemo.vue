<template>
  <div class="ProjectFive">
    <h1>List Demo</h1>
    <List :data="propsIn" />
  </div>
</template>

<script lang="ts" setup>
import { userStore } from "@/store/storeJf/index.ts";
import List from '@/components/branchJf/List.vue'
const store = userStore();
const propsIn = store.projectFive
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-align: center;
}
</style>
