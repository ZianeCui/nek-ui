<template>
    <div class="kl-dropdown-menu"><slot></slot></div>
</template>
<script>
    export default {
        name: 'kl-dropdown-menu'
    };
</script>

<style lang="scss">
    .kl-dropdown-menu {
        min-width: 100px;
    }
</style>