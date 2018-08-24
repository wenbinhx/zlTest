<template>
  <div>
    <div class="index-main-content">
      <zl-header :title="'我的审批'"></zl-header>
      <cube-tab-bar v-model="selectedLabel" showSlider>
        <cube-tab v-for="item in tabs" :label="item.label" :key="item.index">
        </cube-tab>
      </cube-tab-bar>
      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel label="代办审批">
        </cube-tab-panel>
        <cube-tab-panel label="已办审批">
        </cube-tab-panel>
      </cube-tab-panels>
    </div>
  </div>
</template>

<script>
import Header from '@/base/header/header'
export default {
  name: 'home',
  components: {
    'zl-header': Header
  },
  data() {
    return {
      tabs: [{
        label: '代办审批',
        index: 0
      }, {
        label: '已办审批',
        index: 1
      }],
      selectedLabel: '已办审批'
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
