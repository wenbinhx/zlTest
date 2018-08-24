<template>
  <div class="header">
      <span class="prev" @click="back">
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
    backUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    back() {
      if (this.backUrl) {
        this.$router.push(this.backUrl)
      } else {
        this.$router.back(-1)
      }
    }
  }
}
</script>
