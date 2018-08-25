<template>
  <div class="device-slider">
    <cube-slide ref="slide" @change="changePage">
      <cube-slide-item>
        <div>
          <div class="left-chart-div">
            <canvas id="myChart" width="120" height="120"></canvas>
          </div>
          <div class="right-data-div">
            <div class="device-total">
              <p class="device-type">待租设备</p>
              <!-- :refresh="slideCurPage===0" -->
              <count-up
                :start-val="0"
                :end-val="1234"
                :duration="2"
                class="rolling-number"></count-up>
            </div>
            <div class="device-detail">
              <p>自有2000， 转租200</p>
            </div>
          </div>
        </div>
      </cube-slide-item>
      <cube-slide-item>
        2www22WWW3
      </cube-slide-item>
      <cube-slide-item>
        <!-- :refresh="slideCurPage===2" -->
        <count-up
          :start-val="0"
          :end-val="1234"
          :duration="2"
          class="rolling-number"></count-up>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
import F2 from '@antv/f2'
import CountUp from '@/components/CountUp'
export default {
  name: 'bottomMenu',
  components: {
    F2, CountUp
  },
  computed: {
  },
  data() {
    return {
      slideCurPage: 0
    }
  },
  methods: {
    changePage(current) {
      this.slideCurPage = current
      console.log('当前轮播图序号为:' + current)
    },
    // clickHandler(item, index) {
    //   console.log(item, index)
    // },
    /**
     * @Author: wuxuebin
     * @Date: 2018-08-24 19:20:42
     * @Desc: 绘制图表
     */
    renderChart() {
      var data = [{ x: '1', y: 85 }]
      var chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data, {
        y: {
          max: 100,
          min: 0
        }
      })
      chart.axis(false)
      chart.tooltip(false)
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.95,
        radius: 1
      })
      chart.guide().arc({
        start: [0, 0],
        end: [1, 99.98],
        top: false,
        style: {
          lineWidth: 10,
          stroke: '#ccc'
        }
      })
      chart.guide().text({
        position: ['50%', '50%'],
        content: '85%',
        style: {
          fontSize: 20,
          fill: '#1890FF'
        }
      })
      chart.interval().position('x*y').size(10).animate({
        appear: {
          duration: 1200,
          easing: 'cubicIn'
        }
      })
      chart.render()
    }
  },
  mounted() {
    this.renderChart()
  }
}
</script>

<style lang="scss" scope>
.device-slider {
  padding: 10px 5px;
  height: 150px;
}
.left-chart-div {
  width: 120px;
  height: 120px;
  float: left;
  margin-top: -10px;
}
.right-data-div {
  width: calc(100% - 120px);
  text-align: left;
  display: inline-block;
  .device-total {
    height: 70px;
    .device-type {
      font-size: 14px;
      padding: 8px 0;
      color: #222222;
    }
  }
  .device-detail {
    height: 50px;
    padding: 16px 0;
    border-top: 1px solid #cccccc;
  }
}
.rolling-number {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: .32rem;
  color: #04BE02;
}
</style>
