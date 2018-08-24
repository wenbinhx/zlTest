<template>
  <div class="bottom-menu-div" v-show="activeIndex!==-1">
    <div
      v-for="menu in menuList"
      :key="menu.index"
      :style="{width: singleMenuWidth}"
      :class="[activeIndex===menu.index ? 'is-active' : '', 'single-menu']"
      >
      <router-link :to="menu.link">
        <div>
          <svg-icon :icon-class="menu.icon"></svg-icon>
        </div>
        <label>{{ menu.name }}</label>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomMenu',
  props: {
    // activeIndex: {
    //   type: Number,
    //   default: 0
    // }
  },
  computed: {
    singleMenuWidth() {
      return Math.floor(100 / this.menuList.length) + '%'
    },
    links() {
      return this.menuList.map((menu) => { return menu.link })
    }
  },
  /**
   * @Author: wuxuebin
   * @Date: 2018-08-24 16:16:29
   * @Desc: 监听路由, 高亮按钮
   */
  watch: {
    $route(to, from) {
      this.activeIndex = this.links.indexOf(to.path)
      if (this.activeIndex === -1) { // 再模糊匹配一次，待定
        this.links.forEach((link, index) => {
          if (to.path.indexOf(link) !== -1) {
            this.activeIndex = index
          }
        })
      }
    }
  },
  data() {
    return {
      showMenu: true,
      menuList: [
        { index: 0, name: '概览', icon: 'nav-1', link: '/home/overview' },
        { index: 1, name: '审批', icon: 'nav-2', link: '/home/approval' },
        { index: 2, name: '工作', icon: 'nav-3', link: '/home/work' },
        { index: 3, name: '消息', icon: 'nav-4', link: '/home/message' },
        { index: 4, name: '我的', icon: 'nav-5', link: '/home/mine' }
      ],
      activeIndex: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scope>
.bottom-menu-div {
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #f5f6f0;
  color: #999999;
  padding: 10px 0;
  .is-active {
    color: #8bbf1b;
  }
}
.single-menu {
  text-align: center;
  display: inline-block;
  padding: 0 .1rem;
  label {
    display: inline-block;
    margin-top: 5px;
    font-size: 0.12rem;
    font-weight: 400;
  }
  svg {
    font-size: 0.22rem;
  }
}
</style>
