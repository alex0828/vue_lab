<script lang="ts">
import { defineComponent, ref } from "vue";
import Tpi from "../types/Tpi.js";
export default defineComponent({
  name: "TypeScript",
  components: {},
  setup() {
    const tpis = ref<Tpi[]>([
      { title: "資料中心", name: "pinia", id: "1" },
      { title: "開發模式", name: "compostion API", id: "2" },
      { title: "規範語言", name: "TypeScript", id: "3" },
      { title: "建構打包工具", name: "Vite", id: "4" },
    ]);
    return { tpis };
  },
});
</script>

<template>
  <p v-for="tpi of tpis" :key="tpi.id">使用的{{ tpi.title }}為{{ tpi.name }}</p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
