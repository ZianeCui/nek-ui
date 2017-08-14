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
            this.$emit('enter');
        },
        onKeyup () {
            this.$emit('keyup');
        },
        onKeypress () {
            this.$emit('keypress');
        },
        onKeydown () {
            this.$emit('keydown');
        },
        onFocus () {
            this.$emit('focus');
        },
        onBlur () {
            this.$emit('blur');
        },
        onInput () {
            this.$emit('input');
        },
        onChange () {
            this.$emit('change');
        }
    },
    computed: {
        klass () {
            return {
                [`kl-button-${this.type}`]: !!this.type,
                [`kl-button-${this.size}`]: !!this.size
            }
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

