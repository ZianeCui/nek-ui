<template>
    <div class="kl-input">
        <input
            :class="klass"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength"
            @keyup.enter="onEnter"
            @keyup="onKeyup"
            @keypress="onKeypress"
            @keydown="onKeydown"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput"
            @change="onChange">
    </div>
</template>

<script>
export default {
    name: 'kl-input',
    props: {
        type: String,
        disabled: Boolean,
        readonly: Boolean,
        placeholder: String,
        maxlength: Number,
        icon: String
    },
    methods: {
        onEnter () {
            this.$emit('on-enter');
        },
        onKeyup () {
            this.$emit('on-keyup');
        },
        onKeypress () {
            this.$emit('on-keypress');
        },
        onKeydown () {
            this.$emit('on-keydown');
        },
        onFocus () {
            this.$emit('on-focus');
        },
        onBlur () {
            this.$emit('on-blur');
        },
        onInput () {
            this.$emit('on-input');
        },
        onChange () {
            this.$emit('on-change');
        }
    }
};
</script>

<style lang="scss">
    .kl-input {
        display: block;
        position: relative;
        width: 100%;
    }
</style>

