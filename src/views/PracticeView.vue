<template>
  <div class="about">
    <PracticeItem msg="練習項目清單"/>
  </div>
</template>

<script>
import PracticeItem from '@/components/PracticeItem.vue'

export default {
  name: 'PracticeView',
  components: {
    PracticeItem
  }
}
</script>