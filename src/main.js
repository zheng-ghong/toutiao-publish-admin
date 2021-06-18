// 项目启动入口
import Vue from 'vue'
import App from './App.vue'
// 加载Element组件库及其样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 加载全局样式
import './style/index.less'
import router from './router'

// 全局注册Element组件库
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
