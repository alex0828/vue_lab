<template>
  <div></div>
</template>

<script>
import { projectFirestore } from '@/utils/firebase/config'
export default {
  name: 'getUser',
  data () {
    return {
      User: []
    }
  },
  methods: {
    async getUser () {
      try {
        const res = await projectFirestore.collection('UserList').get()
        console.log(res.docs)
      } catch (error) {}
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style>
</style>
