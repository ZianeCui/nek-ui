<template>
    <ul>
        <li class="list-item">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ListItem',
    props: ['item'],
//   created() {
//     console.log('CREATED!')
//   }
}
</script>
