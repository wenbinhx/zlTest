<template>
  <div>
    <router-link to="/">
      <cube-button>返回</cube-button>
    </router-link>
    <router-link to="/componDemo/button" class="linkMenu">
      <cube-button>Button</cube-button>
    </router-link>
    <router-link to="/componDemo/selectNumber" class="linkMenu">
      <cube-button>selectNumber</cube-button>
    </router-link>
    <message-popup :visible.sync="messageVisible">这是一条警告信息</message-popup>
    <message-popup :visible.sync="messageVisible2" :showSecond="5">5秒后自动关闭</message-popup>
    <div style="display: flex; flex-direction: row; flex-wrap: wrap; ">
      <div v-for="(item, index) in showSVG" :key="index" style="width: 50px; margin: 20px;">
        <svg-icon :icon-class="item"></svg-icon>
        <div>{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import MessagePopup from '@/base/message-popup'
export default {
  name: 'componDemo',
  components: {
    MessagePopup
  },
  data() {
    return {
      messageVisible: true,
      messageVisible2: true
    }
  },
  computed: {
    showSVG() {
      const svgs = []
      const requireAll = requireContext => requireContext.keys().map((requireContext) => {
        svgs.push(requireContext.replace('./', '').replace('.svg', ''))
        return requireContext
      })
      const req = require.context('../../icons/svg', false, /\.svg$/)
      requireAll(req)
      console.log(svgs)
      return svgs
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.linkMenu {
  display: block;
  margin: 10px;
}
</style>