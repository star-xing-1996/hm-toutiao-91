import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // 在任意位置使用vant组件  install方法
import 'vant/lib/index.css' // 引入vant组件库 vant的样式组件
import 'amfe-flexible'
import '@/styles/index.less'// 引入全局的自定义样式，覆盖vant样式
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
