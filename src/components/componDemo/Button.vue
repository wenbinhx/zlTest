<template>
  <div>
    <router-link to="/componDemo">
      <cube-button>返回</cube-button>
    </router-link>
    <br /><br />
    <!-- 开关按钮 -->
    <cube-switch v-model="switchValue">{{ switchValue === true ? '开' : '关'}}</cube-switch>
    <br />

    <!-- 单选按钮 -->
    <cube-radio-group v-model="radioSelected" :options="radioOptions" :horizontal="true" />
    <br />

    <!-- 多选按钮 -->
    <cube-checkbox v-model="checbox1">Checkbox1</cube-checkbox>
    <cube-checkbox v-model="checbox2">Checkbox2</cube-checkbox>
    <br />

    <!-- 
      zlzk按钮样式
      radius 是否圆角，class可选值：grey,
       inner-green, back-green, inner-balck, back-black, inner-red, back-red
      -->
    <zlzk-button>默认按钮</zlzk-button>
    <zlzk-button radius class='grey'>灰色按钮</zlzk-button>
    <zlzk-button radius class='inner-red'>红色按钮</zlzk-button>
    <zlzk-button radius class='inner-green'>绿色按钮</zlzk-button>
    <zlzk-button radius class='back-green'>绿色背景</zlzk-button>

    <!-- frontSvg，backSvg属性提供svg图标名称，frontSvg 表示图标在文字前面，backSvg表示图标在文字后面  -->
    <zlzk-button radius class='back-green svg-only' frontSvg='jia'></zlzk-button>
    <zlzk-button class='back-green' frontSvg='bj'>图标按钮</zlzk-button>
    <zlzk-button radius class='inner-red' backSvg='del'>图标按钮</zlzk-button>

    <!-- size:small小按钮,mini迷你按钮； class:none-border无边框 -->
    <zlzk-button radius size='small' class='inner-green'>小按钮</zlzk-button>
    <zlzk-button size='mini' class='grey inner-black' frontSvg='wzx'>未点检</zlzk-button>
    <zlzk-button size='mini' class='inner-black none-border' frontSvg='ck'>无需点检</zlzk-button>

    <!-- inner-green-only仅文字颜色为绿色 -->
    <zlzk-button size='mini' class='inner-green-only svg-diving-line' backSvg='bj2'>正常</zlzk-button>
    <zlzk-button size='mini' class='inner-red-only svg-diving-line' backSvg='bj2'>退回</zlzk-button>
    <br /><br />

    <!-- cube-button为cube-ui按钮 -->
    <cube-button @click="showAlert" class='zlzk'>showAlert</cube-button>
    
    <!-- 按钮组，需自行编写样式(style='position: absolute;width: 100%;bottom: 0;')将按钮固定在底部, -->
    <div>
      <zlzk-button class='back-black none-border' frontSvg='close' type="btn-group-1">确定</zlzk-button>
      <zlzk-button class='back-red none-border' type="btn-group-2">删除</zlzk-button>
    </div>
  </div>
</template>

<script>
import ZlzkButton from '@/base/zlzk-button'
export default {
  name: 'home',
  components: {
    ZlzkButton
  },
  data() {
    return {
      switchValue: false,
      radioSelected: '',
      radioOptions: [{
        label: 'Option1',
        value: 1
      },
      {
        label: 'Option2',
        value: 2
      }],
      checbox1: false,
      checbox2: false
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
        },
        onCancel: () => {
        }
      }).show()
    }
  }
}
</script>

<style lang="scss" scope>
</style>
