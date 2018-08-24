<template>
  <transition name="slide">
    <div class="time-select" v-show="isShow">
      <div class="header">
        <span class="prev" @click="hide">
          <svg-icon class="icon-btn" icon-class="left2"></svg-icon>
        </span>
        <p>日历</p>
      </div>
      <calendar
        ref="calendar"
        :lunar="calendar.lunar" 
        :value="calendar.value"
        :weeks="calendar.weeks" 
        :months="calendar.months" 
        @select="calendar.select"
        @selectMonth="calendar.selectMonth"
        @selectYear="calendar.selectYear"></calendar>
    </div>
  </transition>
</template>
<script>
import Header from '@/base/header/header'
import Calendar from '@/base/calendar/calendar.vue'
/*
*title: 定义mutiPicker基础时分秒选择数据
*author：赵宇龙
*/
const col1Data = []
for (let i = 0; i < 24; i++) {
  col1Data.push({
    text: i < 10 ? `0${i}时` : `${i}时`, value: i
  })
}
const col2Data = []
for (let i = 0; i < 60; i++) {
  col2Data.push({
    text: i < 10 ? `0${i}分` : `${i}分`, value: i
  })
}
const col3Data = []
for (let i = 0; i < 60; i++) {
  col3Data.push({
    text: i < 10 ? `0${i}秒` : `${i}秒`, value: i
  })
}
export default {
  data() {
    const _this = this
    return {
      isShow: false,
      title: '日历',
      calendar: {
        value: this.initCalendar(), // 默认日期
        lunar: true, // 显示农历
        /*
        *alter：赵宇龙
        *resion：语言包已经改为基础组件内置
        weeks: [
          this.$t('calendar.sun'),
          this.$t('calendar.mon'),
          this.$t('calendar.tue'),
          this.$t('calendar.wed'),
          this.$t('calendar.thu'),
          this.$t('calendar.fri'),
          this.$t('calendar.sat')
        ],
        months: [
          this.$t('calendar.january'),
          this.$t('calendar.february'),
          this.$t('calendar.march'),
          this.$t('calendar.april'),
          this.$t('calendar.may'),
          this.$t('calendar.june'),
          this.$t('calendar.july'),
          this.$t('calendar.august'),
          this.$t('calendar.september'),
          this.$t('calendar.october'),
          this.$t('calendar.november'),
          this.$t('calendar.december')
        ],
        */
        select(value) {
          _this.formatTimer = value.join('-')
          _this.mutiPicker.show()
        },
        selectMonth(month, year) {
          // console.log(year, month) 留待拓展
        },
        selectYear(year) {
          // console.log(year) 留待拓展
        }
      }
    }
  },
  mounted() {
    // 创建时分秒picker
    this.mutiPicker = this.$createPicker({
      title: '选择时间',
      data: [col1Data, col2Data, col3Data],
      onSelect: (selectedVal, selectedIndex, selectedText) => {
        this.formatTimer += ' ' + selectedVal.join(':')
        this.$emit('select', this.formatTimer)
        this.isShow = false
        /*
        this.$createDialog({
          type: 'warn',
          content: `本次输出时间格式： ${this.formatTimer}`,
          icon: 'cubeic-alert'
        }).show()
        */
      }
    })
  },
  components: {
    Calendar,
    'zl-header': Header
  },
  methods: {
    showMutiPicker() {
      this.mutiPicker.show()
    },
    initCalendar() {
      const currentDate = new Date()
      return [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()]
    },
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    }
  }
}
</script>