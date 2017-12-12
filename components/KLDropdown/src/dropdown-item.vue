<template>
    <div class="kl-dropdown-item" v-on:click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'kl-dropdown-item',
        props: {

        },
        methods: {
            handleClick: function() {
                console.log(this)
                this.$emit('click', this);
            }
        },
        computed: {

        }
    };
</script>

<style lang="scss">
    .kl-dropdown-item {
        margin: 0;
        line-height: normal;
        padding: 7px 16px;
        clear: both;
        color: #495060;
        font-size: 12px!important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }
    .kl-dropdown-item:hover {
        background: #f3f3f3;
    }
</style>