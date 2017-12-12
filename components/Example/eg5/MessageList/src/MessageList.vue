<template>
    <ul class="list-messages">
        <slot></slot>
    </ul>
</template>

<script>
export default {
  name: 'MessageList',
  props: ['messages'],
  methods: {
    handleMessageClick(message) {
      console.log(message)
    }
  }
}
</script>