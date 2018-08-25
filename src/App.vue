<template>
  <div id="app">
    <!-- 属性isRouterAlive用来控制router-view的显示和隐藏，当切换语言时触发，刷新当前页-->
    <div class="placeholder-head"></div>
    <transition name="fade" mode="out-in">
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
    <!-- 底部按钮组 -->
    <bottom-menu></bottom-menu>
  </div>
</template>

<script>
  import BottomMenu from '@/views/home/bottomMenu'
  export default {
    name: 'App',
    components: {
      BottomMenu
    },
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(function() {
          this.isRouterAlive = true
        })
      }
    }
  }
</script>
<style scoped>
.placeholder-head {
  background-color: #111111 ;
  height: .5rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>

