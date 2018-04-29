import axios from 'axios'

axios.defaults.timeout = 30000; // 响应时间
//请求拦截
axios.interceptors.request.use(config => {

  return config
}, error => {
  return Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use(config => {
  return config
}, err => {
  
  return Promise.reject(err)
})

export default{
  install: function (Vue) {
    Vue.prototype.$axios = axios
  }
}

