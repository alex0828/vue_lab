<template>
  <div>
    <ul class="List" v-if="isSuccess">
      <li v-for="(item) of Cart" :key="item.id" >
        <img :src="item.data.prodImg" alt="">
        {{item.data.prodName}}
      </li>
    </ul>
    <ul class="List" v-else>
     {{Cart.message}}
    </ul>
  </div>
</template>

<script>
import { projectFirestore } from '@/utils/firebase/config'
export default {
  name: 'getCart',
  data () {
    return {
      Cart: {},
      isSuccess: Boolean
    }
  },
  methods: {
    async getList () {
      const vm = this
      try {
        const res = await projectFirestore.collection('list').get()
        if (res.size === 0) {
          vm.isSuccess = false
          throw new Error('資料為空')
        }
        vm.Cart = res.docs.map(doc => {
          return { isSuccess: true, data: { ...doc.data(), prodId: doc.id } }
        })
      } catch (error) {
        vm.Cart = { message: error }
      }
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.List{
  padding: 24px 16px;
  background: #EEEEEE;
  li{
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    list-style: none;
    background: #fff;
    &+li{
    border-top: 5px solid #eee;
    }
    img{
      width: 100px;
      height: auto;
    }
  }
}
</style>
