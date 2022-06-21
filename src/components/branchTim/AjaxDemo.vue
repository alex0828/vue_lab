<template>
<div>
    <div class="practice">
        <h1>Ajax Demo</h1>
    </div>
    <div class="container">
        <div  v-for="item in axiosDataList" :key="item" class="itemList" @click="OpenModal(item.prodId)">
            <div style="width:30%;height:auto;">
                <img :src="item.prodImg" alt="" style="width:100%;height:100%;">
            </div>
            <div style="width:70%;">
                <p>{{item.prodName}}</p>
            </div>
        </div>
    </div>
    <div id="modal" v-show="isOpen">
        <Popup>
            <template #image >
                <div class="mb-2 flex space-x-2">
                    <img :src="AxiosDetail.prodImg" style="width:100px;" alt="picture upload preview">
                </div>
            </template>
            <template #name>
                Name: {{ AxiosDetail.prodName }}
            </template>
            <template #amount>
                Amount: {{ AxiosDetail.amount }}
            </template>
            <template #width>
                Width: {{ AxiosDetail.width }}
            </template>
            <template #weight>
                Weight: {{ AxiosDetail.weight }}
            </template>
            <template #height>
                Height: {{ AxiosDetail.height }}
            </template>
            <template #button>
                {{ btnText }}
            </template>
        </Popup>
    </div>
    <div class="background-black" v-show="isOpen"></div>
</div>
</template>
<script lang="ts">
import Popup from '@/components/branchTim/PopupModal.vue'
import axios from 'axios'
export default {
  name: 'ProjectThree',
  axios,
  components: {
    Popup
  },
  setup () {
      btnText = 'Close Detail'
    return {
      btnText
    }
  },
  computed: {
    isOpen () {
      return this.$store.state.ModalDemo.isOpen
    },
    axiosDataList () {
      return this.$store.state.AxiosList.data
    },
    AxiosDetail () {
      return this.$store.state.AxiosDetail
    }
  },
  mounted () {
    this.getAssetsList()
  },
  methods: {
    OpenModal (id) {
      this.getItemDetail(id)
      this.$store.commit('changeOpen')
    },
    CloseModal () {
      this.isOpen = false
    },
    async getAssetsList () {
      const { data } = await axios.get('/product/list')
      data.success && this.$store.commit('saveAxiosData', data)
    },

    async getItemDetail (id) {
      console.log(id)
      const { data } = await axios.get('/product/detail')
      const dataDetail = data.data.filter(item => item.prodId === id)
      data.success && this.$store.commit('getAxiosDataDetail', dataDetail[0])
    }
  }
}
</script>

<style scoped>
:hover.btn{
    background-color:rgb(66, 110, 230);
}
#modal{
    width:500px;
    padding:40px;
    border-radius: 4px;
    background-color:white;
    z-index:999;
    position: fixed;
    bottom:50%;
    left:50%;
    margin-left:-220px;
    margin-bottom:-240px;
    transform: 1s;
    box-sizing: border-box;
}
.background-black{
    width:100%;
    height:100vh;
    background-color: black;
    opacity: 0.2;
    z-index: 99;
    position: fixed;
    top:0;
    left:0;
}
.btn {
    width:200px;
    height:64px;
    background-color:rgb(33, 83, 218);
    color:white;
    border-radius: 4px;
    border: 0;
    font-size:16px;
    cursor:pointer;
}
.container{
    margin:auto;
    margin:0 20px;
    padding:40px 60px;
    background:rgb(235, 235, 235);
}
.itemList{
    cursor:pointer;
    background-color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding:4px;
    border:0.8px solid rgb(199, 199, 199);
}
li{
    list-style-type: none;
}
</style>
