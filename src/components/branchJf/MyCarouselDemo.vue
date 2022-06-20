<template>
  <div class="owl-carousel owl-theme" ref="owl">
    <img :src="item.prodImg" alt="" v-for="item of carousel" :key="item" />
  </div>
</template>

<script lang="ts" setup>
import { projectFirestore } from "@/utils/firebase/config";
import { nextTick, onMounted, ref } from "vue";
const carousel = ref<object[]>([]);
const getList = async function () {
  try {
    const res = await projectFirestore.collection("list").get();
    if (res.size === 0) {
      throw new Error("資料為空");
    }
    carousel.value = res.docs.map((doc) => {
      return { ...doc.data() };
    });
    nextTick(() => {
      $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
      });
    });
  } catch (error) {
    carousel.value = { message: error };
  }
};
onMounted(() => {
  getList();
});
</script>

<style lang="scss" scoped>
</style>
