<template>
    <ul>
        <li class="message"
            @click="handleClick">
            {{ message }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'message-item',
    props: {
        // messages: Array,
        message: {
            type: String,
            validator: message => message.length > 1
        },
        author: {
            type: String,
            default: 'kaola'
        }
    },
    methods: {
        handleClick() {
            this.$emit('message-clicked', this.message)
        }
    }
}
</script>