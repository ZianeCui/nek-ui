<template>
  <div id="app">
    <Test1 :messages="messages"/>
  </div>
</template>

<script>
import Test1 from './test1'

export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  components: {
    Test1
  }
}
</script>