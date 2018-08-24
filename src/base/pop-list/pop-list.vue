<template>
  <div class="pop-list" :style="{top: posTop}">
    <div class="hd">
      <span class="tab" :style="{width:100/list.length + '%'}" v-for="item in list" @click="clickTap(item.nodeList, item.nodeValue)" :class="{'focus': item.nodeValue === focusObj.tab}">{{item.nodeName}}<i class="delta"></i></span>
    </div>
    <div class="cont">
      <transition name="slide">
        <div class="cont-data" ref="popMask" v-show="isShowPop">
          <transition-group name="fade" 
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <div class="item first" ref="popItem1" :key="1" v-show="deepList1.length && isShowItem">
              <p @click="deepAll(1, 'firstAll')" :class="{'focus': 'firstAll' === focusObj.deep2}">全部类型</p>
              <p v-for="fstDpItem in deepList1" :class="{'focus': fstDpItem.nodeValue === focusObj.deep2}" @click="deepClick(fstDpItem.nodeList, fstDpItem.nodeValue, 2)">{{fstDpItem.nodeName}}</p>
            </div>
            <div class="item second" ref="popItem2" :key="2" v-show="deepList2.length && isShowItem">
              <p @click="deepAll(2, 'secondAll')" :class="{'focus': 'secondAll' === focusObj.deep3}">全部系列</p>
              <p v-for="scdDpItem in deepList2" :class="{'focus': scdDpItem.nodeValue === focusObj.deep3}" @click="deepClick(scdDpItem.nodeList, scdDpItem.nodeValue, 3)">{{scdDpItem.nodeName}}</p>
            </div>
            <div class="item third" ref="popItem3" :key="3" v-show="deepList3.length && isShowItem">
              <p @click="deepAll(3, 'thirdAll')" :class="{'focus': 'thirdAll' === focusObj.deep4}">全部规格</p>
              <p v-for="trdDpItem in deepList3" :class="{'focus': trdDpItem.nodeValue === focusObj.deep4}" @click="deepClick(trdDpItem.nodeList, trdDpItem.nodeValue, 4)">{{trdDpItem.nodeName}}</p>
            </div>
          </transition-group>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preNodeValue: '', // 下拉列表tab栏点击不同tab栏重新渲染数据，这个值用于判断当前点击的和上次点击的是否同一个tab
      isShowPop: false, // 是否显示整个下拉列表
      isShowItem: false, // 是否显示下拉类目
      deepList1: [], // 一级子类目列表
      deepList2: [], // 二级子类目列表
      deepList3: [], // 三级子类目列表
      focusObj: { // 焦点对象，用于判断当前选中项目
        tab: '',
        deep2: '',
        deep3: '',
        deep4: ''
      },
      filterList: [] // 最终返回的过滤结果
    }
  },
  props: {
    list: {
      type: Array,
      default: () => { return [] }
    },
    posTop: {
      type: String,
      default: '.92rem'
    }
  },
  methods: {
    clickTap(list, val) {
      this.focusObj.tab = val
      if (val !== this.preNodeValue) {
        // 初始化二级和三级子类目
        this.deepList2 = []
        this.deepList3 = []
        this.focusObj.deep2 = ''
        this.focusObj.deep3 = ''
        this.focusObj.deep4 = ''
        this.deepList1 = list
        this.filterList[0] = val
        if (!this.isShowPop) {
          this.isShowPop = true
          this.isShowItem = true
        }
        this.$nextTick(function() { // 重新渲染数据
          this.renderMask()
        })
      } else {
        this.isShowPop = !this.isShowPop
        this.isShowItem = !this.isShowItem
      }
      this.preNodeValue = val
    },
    deepClick(list, nodeVal, deep) {
      this.focusObj['deep' + deep] = nodeVal // 存储当前节点值 - 用于判断焦点状态
      this.filterList[deep - 1] = nodeVal // 存储当前节点值 - 用于最终返回的值
      if (deep === 2) {
        // 初始化二级和三级子类目
        this.deepList2 = []
        this.deepList3 = []
        this.focusObj.deep3 = ''
        this.focusObj.deep4 = ''
      } else if (deep === 3) {
        // 初始化三级子类目
        this.deepList3 = []
        this.focusObj.deep4 = ''
      }
      if (list && list.length > 0) { // 判断下一层级节点有数据
        this['deepList' + deep] = list
        this.$nextTick(function() { // 重新渲染数据
          this.renderMask()
        })
      } else { // 判断下一层级节点没数据
        this.$emit('selct', this.filterList)
      }
    },
    deepAll(deep, nodeVal) {
      this.focusObj['deep' + (deep + 1)] = nodeVal
      this.filterList[deep] = nodeVal
      if (!this['deepList' + deep] || !this['deepList' + deep][0].nodeList) { // 判断当前是最后一级节点
        this.$emit('select', this.filterList)
        return false
      }
      if (deep === 1) {
        this.deepList3 = []
        this.focusObj.deep3 = ''
        this.focusObj.deep4 = ''
      }
      this.$emit('select', this.filterList)
      /*
      const listAll = []
      this['deepList' + deep].forEach((item) => {
        listAll.push(...item.nodeList)
      })
      this['deepList' + (deep + 1)] = listAll
      this.$nextTick(function() { // 重新渲染数据
        this.renderMask()
      })
      */
    },
    beforeEnter() {
      this.$refs.popMask.style.height = '0px'
    },
    enter() {
      this.renderMask()
    },
    leave() {
      this.$refs.popMask.style.height = '0px'
    },
    renderMask() {
      this.$refs.popMask.style.height = `${this.getMaxMaskheight()}px`
    },
    getMaxMaskheight() {
      const ele1 = this.$refs.popItem1.getBoundingClientRect().height
      const ele2 = this.$refs.popItem2.getBoundingClientRect().height
      const ele3 = this.$refs.popItem3.getBoundingClientRect().height
      return Math.max(ele1, ele2, ele3)
    },
    hide() {
      this.isShowPop = !this.isShowPop
      this.isShowItem = !this.isShowItem
    }
  }
}
</script>