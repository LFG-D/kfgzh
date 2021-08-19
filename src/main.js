// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
// elementUI导入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  // 注意样式文件需要单独引入
import '../static/global/global.css'
// 调用插件
Vue.use(ElementUI);

Vue.prototype.$axios=axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
