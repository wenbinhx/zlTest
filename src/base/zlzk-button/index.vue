<template>
  <button :disabled="disabled" class="el-button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      size ? 'el-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-radius': radius,
        'is-icon': icon,
        'is-iconBorder': iconBorder
      }
    ]"
  >
    <el-load-icon class="h-icon-loading" v-if="loading" @click="handleInnerClick"></el-load-icon>
    <i :class="icon" v-if="icon && !loading" @click="handleInnerClick"></i>
    <svg-icon v-if="frontSvg && !loading" :icon-class="frontSvg"></svg-icon>
    <i :class="iconBorder" v-if="iconBorder && !loading" @click="handleInnerClick"></i>
    <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
    <svg-icon v-if="backSvg && !loading" :icon-class="backSvg"></svg-icon>
  </button>
</template>
<script>
  export default {
    name: 'ZlzkButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        default: ''
      },
      frontSvg: {
        default: ''
      },
      backSvg: {
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      iconBorder: {
        default: ''
      },
      plain: Boolean,
      autofocus: Boolean,
      radius: Boolean
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      },
      handleInnerClick(evt) {
        if (this.disabled) {
          evt.stopPropagation()
        }
      }
    }
  }
</script>
