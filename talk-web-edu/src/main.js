// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'event-source-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import $http from './utils/http'
import auth from './utils/filter'
import { getKernelVersion , getUrlParams } from './utils/browser/index'
import components from './components/index'
import privateComponents from './private-component/index'
import './scss/base.scss'
import ElementUI from 'element-ui'
import echarts from 'echarts'



//集成饿了吗ui
Vue.use(ElementUI);

//使用echarts
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
//加载store库
Vue.use(store);

//加载自定义公共组件
Vue.use(components);

//加载自定义业务组件
Vue.use(privateComponents);

//http请求的同意参数处理，异常拦截，链接超时处理
Vue.use($http);

//登陆拦截处理
auth(router, store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})