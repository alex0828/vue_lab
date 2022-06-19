<template>
  <div>{{ store.name }}</div>
  {{ store.count }}
  <button @click="store.inc">++</button>
</template>
<script lang="ts" setup>
import { userStore } from "@/store/storeJf/index.ts";
const store = userStore();
</script>