<template>
  <div>
    <ul class="List" v-if="isSuccessCart">
      <li v-for="(item) of Cartpool" :key="item.id" @click="lightBoxOpen(item.data.prodId)">
        <img :src="item.data.prodImg" alt="">
        {{item.data.prodName}}
      </li>
    </ul>
    <ul class="List" v-else>
     {{Cart.message}}
    </ul>
    <PopupModal>
      <ul v-if="isSuccessCartDetail">
        <li><img :src="CartDetailpool.data.prodImg" alt=""></li>
        <li><b>產品 id :</b> {{CartDetailpool.data.prodId}}</li>
        <li><b>品名 :</b> {{CartDetailpool.data.prodName}}</li>
        <li><b>售價 :</b> {{CartDetailpool.data.amount}}</li>
        <li><b>寬 :</b> {{CartDetailpool.data.width}}</li>
        <li><b>高 :</b> {{CartDetailpool.data.height}}</li>
        <li><b>重量 :</b> {{CartDetailpool.data.weight}}</li>
        <li><b>說明 :</b> {{CartDetailpool.data.description}}</li>
      </ul>
      <ul v-else>
        <li>{{CartDetailpool.data.message}}</li>
      </ul>
      <button
        class="button"
        @click="lightBoxClose"
      >
        Close PopupModal
      </button>
    </PopupModal>
  </div>
</template>

<script>
import { projectFirestore } from '@/utils/firebase/config'
import PopupModal from '@/components/praticies/PopupModal.vue'
export default {
  name: 'getCart',
  data () {
    return {
      Cart: {},
      CartDetail: {},
      isSuccessCart: Boolean,
      isSuccessCartDetail: Boolean
    }
  },
  computed: {
    Cartpool () {
      return this.Cart
    },
    CartDetailpool () {
      return this.CartDetail
    }
  },
  components: {
    PopupModal
  },
  methods: {
    async lightBoxOpen (id) {
      const vm = this
      vm.CartDetail = {}
      try {
        const res = await projectFirestore.collection('detail').doc(id).get()
        vm.isSuccessCartDetail = true
        if (res.exists === false) {
          vm.isSuccessCartDetail = res.exists
          throw new Error('查無資料')
        }
        vm.$store.commit(
          'projectLightButtonControler',
          { isOpen: true }
        )
        vm.CartDetail = { isSuccess: true, data: { ...res.data(), prodId: id } }
      } catch (error) {
        vm.$store.commit(
          'projectLightButtonControler',
          { isOpen: true }
        )
        vm.CartDetail = { isSuccess: true, data: { message: error } }
      }
    },
    async getList () {
      const vm = this
      try {
        const res = await projectFirestore.collection('list').get()
        if (res.size === 0) {
          vm.isSuccessCart = false
          throw new Error('資料為空')
        }
        vm.Cart = res.docs.map(doc => {
          return { isSuccess: true, data: { ...doc.data(), prodId: doc.id } }
        })
      } catch (error) {
        vm.Cart = { message: error }
      }
    },
    lightBoxClose () {
      this.$store.commit(
        'projectLightButtonControler',
        { isOpen: false }
      )
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
li{
  list-style: none;
}
.List{
  padding: 24px 16px;
  background: #EEEEEE;
  li{
    cursor: pointer;
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    list-style: none;
    background: #fff;
    &+li{
    border-top: 5px solid #eee;
    }
    &:hover{
      background: rgb(120, 125, 255);
    }
    img{
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
