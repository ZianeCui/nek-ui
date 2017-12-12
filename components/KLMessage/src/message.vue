<template>
  <div id="app">
    <MessageItem :messages="messages"
        v-for="message in messages"
        :key="message"
        @message-clicked="handleMessageClick" />
  </div>
</template>

<script>
import MessageItem from './message-item.vue'

export default {
  name: 'message',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  components: {
    MessageItem
  },
  methods: {
    handleMessageClick(message) {
      console.log(message)
    }
  },
}
</script>