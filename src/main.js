import Vue from 'vue'
import 'cube-ui/cube.min.css'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import i18n from './lang' // lang i18n

import './assets/styles/index.scss' // global css
import './assets/styles/border.css' // 解决边框一像素问题
import './assets/styles/theme-default.scss'
import './assets/styles/theme-default2.scss'
import './assets/styles/cover-cube-ui.scss'

import fastClick from 'fastclick'

import App from './App'
import router from './router'
import store from './store'
import Cube from 'cube-ui'

import 'babel-polyfill'

import '@/icons' // icon

import '@/permission' // permission control
fastClick.attach(document.body)
Vue.use(Cube)

Vue.config.productionTip = false

// 关闭生产环境的调试信息
const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
