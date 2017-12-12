<template>
    <div class="kl-dropdown">
        <div class="kl-dropdown-header" @click="onClick">
            <slot></slot>
        </div>
        <div class="kl-dropdown-footer" v-bind:class="{ 'kl-dropdown-footer-show': visible }">
            <slot name="list"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'kl-dropdown',
        props: {
            // visible: false
        },
        computed: {

        },
        watch: {

        },
        methods: {
            onClick: function() {
                console.log(this)
                this.visible = true;
                this.$emit('click');
            }
        },
        data: function () {
            return {
               visible: false
            }
        }
    };
</script>
<style lang="scss">
    .kl-dropdown {
        display: inline-block;
        position: relative;
        .kl-dropdown-header {
            display: inline-block;
            font-size: 12px;
        }
        .kl-dropdown-footer {
            display: none;
            position: absolute;
            width: inherit;
            max-height: 200px;
            overflow: auto;
            margin: 5px 0;
            padding: 5px 0;
            background-color: #fff;
            box-sizing: border-box;
            border-radius: 4px;
            box-shadow: 0 1px 6px rgba(0,0,0,.2);
            position: absolute;
            z-index: 900;
        }
        .kl-dropdown-footer-show {
            display: inline-block;
        }
    }
</style>