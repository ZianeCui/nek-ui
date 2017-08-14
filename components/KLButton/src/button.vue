<template>
    <button :disabled="disabled" class="kl-button" :class="classObject" type="button" @click="onClick">
        <kl-icon v-if="icon" :type="icon"></kl-icon>
        {{ title }}
    </button>
</template>

<script>
import KLIcon from '../../KLIcon/index';

export default {
    name: 'kl-button',
    components: {
        'kl-icon': KLIcon
     },
    props: {
        disabled: Boolean,
        title: String,
        type: String,
        icon: String
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    },
    computed: {
        classObject () {
            return {
                [`kl-button-${this.type}`]: !!this.type,
                [`kl-button-${this.size}`]: !!this.size
            }
        }
    }
};
</script>

<style lang="scss">
.kl-button {
    // - 移除浏览器中的margin。| Remove margins in Chrome, Safari and Opera.
    -webkit-appearance: none;
    margin: 0;
    // - 移除浏览器中的默认border。| Remove borders for `button`.
    overflow: visible;
    // - 让字体继承父节点的。| Correct `font` properties not being inherited for `button`.
    font: inherit;
    // - Address inconsistent `text-transform` inheritance which is only inherit in Firefox and IE.
    text-transform: none;
    // - 为了`a`标签。| Required for `a`.
    text-decoration: none;
    // - 统一用`pointer`，在`a`标签没有`href`的时候鼠标指针不是pointer。 | Use pointer cursor at any time.
    cursor: pointer;
    // - 统一box-sizing，a标签默认的box-sizing是content-box，而button标签默认的box-sizing是border-box。
    box-sizing: border-box;
    // - Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
    background: none;
    // - Others
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    min-width: 80;
    padding: 0 16;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 2px;
    font-size: 12px;
    color: #333;
    transition-duration: 0.1s;
    transition-property: transform;
    transition-timing-function: ease;
    white-space: nowrap;
}
/* Hover */
.kl-button:hover,
.kl-button:focus { // - Apply hover style also to focus state
    // - Remove default focus style
    outline: none;
    // - Required for `a` elements
    text-decoration: none;
    background: #fff;
    border-color: #bbb;
}
/* Active */
.kl-button:active,
.kl-button.z-act {
    background: #fff;
}

.kl-button-sm {
    height: 24px;
}

.kl-button-primary {
    height: 32px;
}

.kl-button-secondary {
    height: 32px;
}

</style>

