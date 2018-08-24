<template>
    <div
      v-show="visible"
      :class="[
        'message-popup-div',
        type ? 'message-popup-' + type : ''
      ]">
      <label class="message-content">
        <svg-icon v-if="type==='warning'" icon-class="tan"></svg-icon>
        <slot></slot>
      </label>
      <div v-show="closeBtn" class="close-btn" @click="handleCloseClick">
        <svg-icon icon-class="del2"></svg-icon>
      </div>
    </div>
</template>

<script>
export default {
  name: 'message-popup',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'warning'
    },
    closeBtn: {
      type: Boolean,
      default: true
    },
    showSecond: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentVal: 0
    }
  },
  methods: {
    handleCloseClick() {
      this.$emit('update:visible', false)
    },
    autoClose() {
      if (this.showSecond) {
        setTimeout(this.handleCloseClick, this.showSecond * 1000)
      }
    }
  },
  mounted() {
    this.autoClose()
  }
}
</script>

<style lang="scss" scope>
.message-popup-div {
  width: 100%;
  padding: 10px 30px 10px 10px;
  line-height: 18px;
  margin: 0;
  border: 1px solid #eeeeee;
  min-height: 32px;
  box-shadow: 0 3px #eeeeee;
  position: relative;
  .message-content {
    word-break: break-all;
  }
  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
    font-size: .32rem;
    color: #fd6969;
  }
}
.message-popup-warning {
  color: #fbab4a;
  background-color: #ffffff;
  font-size: .12rem;
}
</style>
