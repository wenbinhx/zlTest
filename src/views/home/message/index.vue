<template>
  <div>
    <div class="index-main-content">
      <x-header :showBackIcon="false">
        <div style="color:#bdf11b">
          消息中心fromZJ
        </div>
      </x-header>
    </div>
    <!-- 底部按钮组 -->
    <bottom-menu :activeIndex="3"></bottom-menu>
  </div>
</template>

<script>
import XHeader from '@/base/x-header'
import BottomMenu from '../bottomMenu'
export default {
  name: 'message',
  components: {
    XHeader,
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
</style>
