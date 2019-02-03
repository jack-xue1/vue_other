// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios  from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios=axios;//设置全局引用 直接this 对象引用就行

//这个地方一定要记得加字符编码内容进去
axios.defaults.headers.post['Content-type']="application/json;charset=UTF-8";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
