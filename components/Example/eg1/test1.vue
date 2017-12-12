<template>
    <ul class="test1">
        <li v-for="message in messages">
            {{ message }}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'list',
  props: ['messages']
}
</script>
