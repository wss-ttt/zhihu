// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
// 引入全局的功能样式
import '@/assets/css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(ElementUI)

// 全局配置vue-lazyloay信息
Vue.use(VueLazyLoad, {
  error: require('../static/error.jpg'),
  loading: require('../static/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,   // 注入store
  components: { App },
  template: '<App/>'
})
