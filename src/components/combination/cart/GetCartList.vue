<template>
  <div>
    <ul class="List" v-if="isSuccessCart">
      <li
        v-for="item of Cartpool"
        :key="item.id"
        @click="lightBoxOpen(item.data.prodId)"
      >
        <img :src="item.data.prodImg" alt="" />
        {{ item.data.prodName }}
      </li>
    </ul>
    <ul class="List" v-else>
      {{
        Cart.message
      }}
    </ul>
    <PopupModal :lightBoxShow="nineBoxShow">
      <ul v-if="isSuccessCartDetail">
        <li><img :src="CartDetailpool.data.prodImg" alt="" /></li>
        <li><b>產品 id :</b> {{ CartDetailpool.data.prodId }}</li>
        <li><b>品名 :</b> {{ CartDetailpool.data.prodName }}</li>
        <li><b>售價 :</b> {{ CartDetailpool.data.amount }}</li>
        <li><b>寬 :</b> {{ CartDetailpool.data.width }}</li>
        <li><b>高 :</b> {{ CartDetailpool.data.height }}</li>
        <li><b>重量 :</b> {{ CartDetailpool.data.weight }}</li>
        <li><b>說明 :</b> {{ CartDetailpool.data.description }}</li>
      </ul>
      <ul v-else>
        <li>{{ CartDetailpool.data.message }}</li>
      </ul>
      <button class="button" @click="lightBoxClose">Close PopupModal</button>
    </PopupModal>
  </div>
</template>

<script lang="ts" setup>
import { projectFirestore } from "@/utils/firebase/config";
import { userStore } from "@/store/storeJf/index.ts";
import PopupModal from "@/components/branchJf/PopupModal.vue";
import { computed, onMounted, ref } from "vue";
const Cart = ref<object>({});
const CartDetail = ref<object>({});
const isSuccessCart = ref<boolean>(true);
const isSuccessCartDetail = ref<boolean>(false);
const nineBoxShow = ref<boolean>(false);
const Cartpool = computed(() => {
  return Cart.value;
});
const CartDetailpool = computed(() => {
  return CartDetail.value;
});
const lightBoxOpen = async function (id: number) {
  CartDetail.value = {};
  try {
    const res = await projectFirestore.collection("detail").doc(id).get();
    isSuccessCartDetail.value = true;
    if (res.exists === false) {
      isSuccessCartDetail.value = res.exists;
      throw new Error("查無資料");
    }
    
    nineBoxShow.value = !nineBoxShow.value
    CartDetail.value = { isSuccess: true, data: { ...res.data(), prodId: id } };
  } catch (error) {
    nineBoxShow.value = !nineBoxShow.value
    CartDetail.value = { isSuccess: true, data: { message: error } };
  }
};

const getList = async function () {
  try {
    const res = await projectFirestore.collection("list").get();
    if (res.size === 0) {
      isSuccessCart.value = false;
      throw new Error("資料為空");
    }
    console.log(res);
    console.log(res.docs);
    Cart.value = res.docs.map((doc) => {
      return { isSuccess: true, data: { ...doc.data(), prodId: doc.id } };
    });
  } catch (error) {
    Cart.value = { message: error };
  }
};
const lightBoxClose = function () {
  nineBoxShow.value = !nineBoxShow.value
};
onMounted(() => {
  getList();
});
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.List {
  padding: 24px 16px;
  background: #eeeeee;
  li {
    cursor: pointer;
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    list-style: none;
    background: #fff;
    & + li {
      border-top: 5px solid #eee;
    }
    &:hover {
      background: rgb(120, 125, 255);
    }
    img {
      width: 100px;
      height: auto;
    }
  }
}
.button {
  cursor: pointer;
  padding: 8px;
  background: #057bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}
</style>
