import axios from 'axios';
import {Message} from 'element-ui';
axios.defaults.timeout = 30000; // 响应时间
//请求拦截
axios.interceptors.request.use(config => {
  /* 
    配置请求头参数：
    config.headers['token'] ='123';
  */

  /**配置接口根路径*/
  config.url=process.env.http.root+'/'+config.url;

  return config
}, error => {
  return Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use(config => {
  return config
}, err => {
    if(!err.response){
      Message.error("服务器维护中~~");
    }else{
      switch(err.response.status){
      case 401:
        Message.error("没有访问权限啦~~");
        break;
      case 404:
        Message.error("该请求失踪啦~~");
        break;
      case 500:
        Message.error("服务器崩溃啦~~");
        break;
      default:
        Message.error("服务器维护中~~");
    }
  }
  
  return Promise.reject(err)
})

export default{
  install: function (Vue) {
    Vue.prototype.$axios = axios
  }
}

