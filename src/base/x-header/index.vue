<template>
  <div class="x-header">
    <span class="prev" @click="back" v-show="showBackIcon">
      <svg-icon class="icon-btn" icon-class="left2"></svg-icon>
    </span>
    <slot></slot>
    <div class="operate">
      <slot name="operate"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showBackIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scope>
.x-header {
  background-color: #111111 ;
  height: .5rem;
  text-align: center;
  line-height: .5rem;
  color: #ffffff;
  font-size: .14rem;
  z-index: 100;
  .prev {
    position: absolute;
    left: 10px;
  }
  .operate {
    position: absolute;
    right: 10px;
  }
}
</style>
