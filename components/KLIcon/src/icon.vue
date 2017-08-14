<template>
    <i class="kl-icon" :class="klass" :style="style" @click="onClick"></i>
</template>

<script>
export default {
    name: 'kl-icon',
    props: {
        type: String,
        fontSize: String,
        color: String,
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    },
    computed: {
        klass () {
            return {
                [`kl-icon-${this.type}`]: !!this.type,
            }
        },
        style () {
            let style = {};

            if (!!this.fontSize) {
                style.fontsize = this.fontSize + 'px';
            }

             if (!!this.color) {
                style.color = this.color;
            }

            return style;
        }
    }
};
</script>

<style lang="scss">
    @import 'icon.css'
</style>

