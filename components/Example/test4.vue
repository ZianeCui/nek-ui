<template>
    <ul>
        <Test3 :item="item" v-for="item in list"/>
    </ul>
</template>

<script>
import Test3 from './test3.vue'

export default {
  name: 'Test4',
  props: ['list'],
  components: {
    Test3
  }
}
</script>