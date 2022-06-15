<template>
    <div id="modal">
        <div>Demo Modal</div>
        <div class="line"> </div>
         <div>
            <slot name="image"></slot>
        </div>
        <p>
            <slot name="title"></slot>
        </p>
        <p>
            <slot name="name"></slot>
        </p>
        <p>
            <slot name="amount"></slot>
        </p>
        <p>
            <slot name="width"></slot>
        </p>
        <p>
            <slot name="height"></slot>
        </p>
        <p>
            <slot name="weight"></slot>
        </p>
        <div class="line"> </div>
         <button class="btn" @click="CloseModal">
            <slot name="button"></slot>
        </button>
    </div>
</template>

<script>
export default {
  name: 'MyPopup',
  methods: {
    CloseModal () {
      this.$store.commit('changeClose')
    }
  }
}
</script>

<style scoped>

.line{
    margin:12px 0;
    border-bottom:solid silver 0.5px ;
}
:hover.btn{
    background-color:rgb(66, 110, 230);
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
</style>
