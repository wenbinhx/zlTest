<template>
  <div>
    <x-header :showBackIcon="false">我的审批</x-header>
    <div class="index-main-content">
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
import XHeader from '@/base/x-header'
export default {
  name: 'home',
  components: {
    XHeader
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
</style>
