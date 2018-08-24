<template>
  <div>
    <div class="index-main-content">
      <zl-header :title="'whatup'"></zl-header>
      <cube-tab-bar v-model="selectedLabel">
        <cube-tab v-for="item in tabs" :label="item.label" :key="item.index">
        </cube-tab>
      </cube-tab-bar>
      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel label="运营统计">
          <x-select
            v-model="xSelectValue"
            :title="'设备类型'"
            :popTile="'bye'"
            :options="xSelectOptions">
          </x-select>
          <x-select
            v-model="xSelectValue"
            :title="'营收统计'"
            :popTile="'bye'"
            :options="xSelectOptions">
          </x-select>
          <div class="dividing-zone" style="height:10px;">&nbsp;</div>
          <div class='yytj-chart'>
            图表待补充
          </div>
          <div class="dividing-zone htzx-data">
            <span></span>
            <span>合同执行</span>
            <span>总计2222份</span>
          </div>
          <div>
            <x-select
              v-model="xSelectValue"
              :title="'待执行合同'"
              :popTile="'bye'"
              :options="xSelectOptions">
            </x-select>
            <x-select
              v-model="xSelectValue"
              :title="'执行中合同'"
              :popTile="'bye'"
              :options="xSelectOptions">
            </x-select>
          </div>
          <router-link to="/componDemo">
            <cube-button>组件demo</cube-button>
          </router-link>
          <br>
          <cube-button @click="showPicker">底部弹窗</cube-button>
        </cube-tab-panel>
        <cube-tab-panel label="设备概览">
          <!-- 设备概览信息轮播 -->
          <device-slider v-if="selectedLabel==='设备概览'"></device-slider>
          <!-- <router-link to="/login">去登入</router-link>
          <br> -->
          <cube-button @click="clickSingle">日历组件单选</cube-button>
          <br>
          <cube-button @click="clickMultiple">日历组件多选</cube-button>
          <br>
          <router-link to="/productList">
            <cube-button>下拉选项框</cube-button>
          </router-link>
        </cube-tab-panel>
        <cube-tab-panel label="客户统计">
          <count-up :start-val="1" :end-val="1388" :duration="2" class="rount-ip-number"></count-up>
        </cube-tab-panel>
      </cube-tab-panels>
    </div>
    <!-- 日历组件 -->
    <time-single-select ref="singleSelect" @select="selectSingle"></time-single-select>
    <time-multiple-select ref="multipleSelect" @select="selectMultiple"></time-multiple-select>
  </div>
</template>

<script>
import Header from '@/base/header/header'
import XSelect from '@/base/x-select'
import DeviceSlider from '../deviceSlider'
import CountUp from '@/components/CountUp'
import TimeSingleSelect from '@/components/TimeSelect/TimeSingleSelect'
import TimeMultipleSelect from '@/components/TimeSelect/TimeMultipleSelect'
export default {
  name: 'home',
  components: {
    'zl-header': Header,
    XSelect,
    DeviceSlider,
    CountUp,
    TimeSingleSelect,
    TimeMultipleSelect
  },
  data() {
    return {
      selectedLabel: '运营统计',
      tabs: [{
        label: '运营统计',
        index: 0
      }, {
        label: '设备概览',
        index: 1
      }, {
        label: '客户统计',
        index: 2
      }],
      pickerWindow: {},
      selectData: [
        { text: 'ai', value: '0' },
        { text: 'ww', value: '1' },
        { text: 'kk', value: '2' }
      ],
      xSelectOptions: ['device2013', 'device2014', 'device2015'],
      xSelectValue: ''
    }
  },
  methods: {
    clickSingle() {
      this.$refs.singleSelect.show()
    },
    clickMultiple() {
      this.$refs.multipleSelect.show()
    },
    selectSingle(time) {
      console.log(time)
    },
    selectMultiple(time) {
      console.log(time)
    },
    showPicker() {
      this.pickerWindow.show()
    }
  },
  mounted() {
    this.pickerWindow = this.$createPicker({
      title: '',
      data: [this.selectData],
      onSelect: (selectedVal, selectedIndex, selectedText) => {
        console.log(`value: ${selectedVal.join(', ')} index: ${selectedIndex.join(', ')} text: ${selectedText.join(' ')}`)
      },
      onCancel: () => {
        console.log('cancel')
      }
    })
  }
}
</script>

<style lang="scss" scope>
.index-main-content {
  height: calc(100vh - 1.04rem);
  overflow-y: auto;
}
.dividing-zone {
  background-color: #eeeeee;
}
.rount-ip-number {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: .8rem;
  color: #04BE02;
}
.yytj-chart {
  height: 300px;
  width: 100%;
  padding: 6px;
}
.htzx-data {
  height: .4rem;
  padding: .05rem 0;
  line-height: .3rem;
  span:first-child {
    padding: 0 .02rem;
    margin-left: .16rem;
    margin-right: .08rem;
    border: 1px solid #8bbf1c;
    background-color: #8bbf1c;
    border-radius: .03rem;
  }
  span:nth-child(2) {
    font-size: .14rem;
    font-weight: 700;
  }
  span:nth-child(3) {
    font-size: .13rem;
    float: right;
    color: #666666;
    margin-right: .06rem;
  }
}
</style>
