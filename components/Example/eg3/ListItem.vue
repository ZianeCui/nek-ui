<template>
    <ul>
        <li class="list-item">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'List',
    props: {
        item: {
            type: String,
            required: true,
            validator: message => message.length > 1
        },
        name: {
            type: String,
            default: 'Paco'
        }
    },
}
</script>
