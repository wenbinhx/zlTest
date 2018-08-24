<template>
  <div>
    <div class="index-main-content">
      <zl-header :title="'消息中心'"></zl-header>
      <div>
        消息中心fromZJ
      </div>
    </div>
    <!-- 底部按钮组 -->
    <bottom-menu :activeIndex="3"></bottom-menu>
  </div>
</template>

<script>
import Header from '@/base/header/header'
import BottomMenu from '../bottomMenu'
export default {
  name: 'message',
  components: {
    'zl-header': Header,
    BottomMenu
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
