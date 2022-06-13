<template>
<div>
    <div class="practice">
        <h1>Modal Demo</h1>
    </div>
    <div class="container">
        <div>
            <button class="btn" @click="OpenModal">Open PopupModal</button>
        </div>
    </div>
    <div id="modal" v-show="isOpen">
        <Popup>
            <template #title>
                {{ title }}
            </template>
            <template #button>
                {{ btnText }}
            </template>
        </Popup>
    </div>
    <div class="background-black" v-show="isOpen"></div>
</div>
</template>
<script>
import Popup from '@/components/PopupModal.vue'
export default {
  name: 'ProjectThree',
  components: {
    Popup
  },
  data () {
    return {
      title: "Wow, You're reading this text in a modal",
      btnText: 'Close PopupModal'
    }
  },
  computed: {
    isOpen () {
      return this.$store.state.ModalDemo.isOpen
    }
  },
  methods: {
    OpenModal () {
      this.$store.commit('changeOpen')
    },
    CloseModal () {
      this.isOpen = false
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
    height:160px;
    padding:40px;
    border-radius: 4px;
    background-color:white;
    z-index:999;
    position: fixed;
    bottom:50%;
    left:50%;
    margin-left:-290px;
    margin-bottom:-120px;
    transform: 1s;
}
.background-black{
    width:100%;
    height:100%;
    background-color: black;
    opacity: 0.2;
    z-index: 99;
    position: absolute;
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
    padding:20px;
    background:rgb(235, 235, 235);
}
li{
    list-style-type: none;
}
</style>
