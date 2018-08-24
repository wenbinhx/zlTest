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
        :range="calendar.range"
        :lunar="calendar.lunar"
        :value="calendar.value"
        :begin="calendar.begin"
        :end="calendar.end"
        @select="calendar.select"></calendar>
    </div>
  </transition>
</template>
<script>
import Header from '@/base/header/header'
import Calendar from '@/base/calendar/calendar.vue'
export default {
  data() {
    const _this = this
    return {
      isShow: false,
      title: '日历',
      calendar: {
        range: true,
        value: this.initCalendar(), // 默认日期
        lunar: true, // 显示农历
        begin: this.getBegin(), // 可选开始日期
        end: this.getEnd(), // 可选结束日期
        select(begin, end) {
          const formatTimer = begin.join('-') + ',' + end.join('-')
          _this.$emit('select', formatTimer)
          _this.isShow = false
        }
      }
    }
  },
  components: {
    Calendar,
    'zl-header': Header
  },
  methods: {
    initCalendar() {
      const currentDate = new Date()
      return [[currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()], [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()]]
    },
    getBegin() {
      const currentDate = new Date()
      return [currentDate.getFullYear() - 10, currentDate.getMonth() + 1, currentDate.getDate()]
    },
    getEnd() {
      const currentDate = new Date()
      return [currentDate.getFullYear() + 10, currentDate.getMonth() + 1, currentDate.getDate()]
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