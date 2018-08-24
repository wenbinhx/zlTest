<template>
  <div>
    <div class="index-main-content">
      <zl-header :title="'个人中心'"></zl-header>
      <div>
        我的，天
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/base/header/header'
export default {
  name: 'mine',
  components: {
    'zl-header': Header
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scope>
.index-main-content {
  height: calc(100vh - 1.04rem);
  overflow-y: auto;
}
</style>
