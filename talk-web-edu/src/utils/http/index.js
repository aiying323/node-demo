import axios from 'axios'
import {Message} from 'element-ui';

axios.defaults.timeout = 30000; // 响应时间
//请求拦截
axios.interceptors.request.use(config => {
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
	Message.error("服务器维护中~~");
	return Promise.reject(err)
})

export default{
  install: function (Vue) {
    Vue.prototype.$axios = axios
  }
}

