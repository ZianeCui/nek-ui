<template>
    <ul>
        <ListItem :item="item" v-for="item in list"/>
    </ul>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'List',
  props: ['list'],
  components: {
    ListItem
  }
}
</script>