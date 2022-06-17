<template>
  <projectHeader :menu="list" />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import projectHeader from "@/components/Header.vue";
export default defineComponent({
  name: "App",
  components: {
    projectHeader,
  },
  setup() {
    const list = ref<string[]>(["home", "about", "practiceTim","practiceJeffrey"]);
    return { list };
  },
});
</script>
<style>
</style>
