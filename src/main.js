// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import $ from "jquery";

//阻止vue在启动时生成生产提示
Vue.config.productionTip = false;
//性能追踪
Vue.config.performance = true;
//取消所有默认的日志和警告
Vue.config.slient=false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})