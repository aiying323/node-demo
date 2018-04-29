import axios from 'axios'

axios.defaults.timeout = 30000; // 响应时间
//请求拦截
axios.interceptors.request.use(config => {
	//配置请求头参数：
  config.headers['token'] ='123';
  config.url=process.env.http.root+'/'+config.url;
  
  /*
    console.log(config);
  */
  return config
}, error => {
  return Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use(config => {
  return config
}, err => {
  //异常拦截
  console.log('有错误了啦啦啦啦');
  /*
    console.log(err.response);
  */
  return Promise.reject(err)
})

export default{
  install: function (Vue) {
    Vue.prototype.$axios = axios
  }
}

