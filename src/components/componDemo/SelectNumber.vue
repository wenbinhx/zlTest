<template>
  <div>
    <router-link to="/componDemo">
      <cube-button>返回</cube-button>
    </router-link>
    <br /><br />
    <select-number v-model="select1"></select-number>
    <!-- step表示每次增减步数，min max控制最大最小值 -->
    <select-number v-model="select2" :step="2" :min="-1000" :max="10"></select-number>
    <br /><br />
  </div>
</template>

<script>
import SelectNumber from '@/base/select-number'
export default {
  name: 'home',
  components: {
    SelectNumber
  },
  data() {
    return {
      select1: 0,
      select2: 2
    }
  },
  methods: {
    showAlert() {
      this.$createDialog({
        type: 'confirm',
        // icon: 'cubeic-alert',
        title: '冻结',
        content: '是否冻结该账户档案 ?',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          // this.$createToast({
          //   type: 'warn',
          //   time: 1000,
          //   txt: '点击确认按钮'
          // }).show()
        },
        onCancel: () => {
        }
      }).show()
    }
  }
}
</script>

<style lang="scss" scope>
$ft30: 50px;
.icon-test{
  font-size: $ft30;
}
</style>
