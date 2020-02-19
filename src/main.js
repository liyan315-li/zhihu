import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import Vueaxios from 'vue-axios'


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import '@/assets/css/style.css'
import '@/assets/css/swiper.min.css'
import '@/assets/css/demo.css'

// 接口axios
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
axios.defaults.baseURL = '/api'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 请求接口连接超时
// axios.defaults.retry = 4;
// axios.defaults.retryDelay = 1000;
// axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
//  var config = err.config;
//  // 如果config不存在或未设置重试选项，请拒绝
//  if(!config || !config.retry) return Promise.reject(err);
//  // 设置变量跟踪重试次数
//  config.__retryCount = config.__retryCount || 0;
//  // 检查是否已经达到最大重试总次数
//  if(config.__retryCount >= config.retry) {
//   // 抛出错误信息
//   return Promise.reject(err);
//  }
//  // 增加请求重试次数
//  config.__retryCount += 1;
//  // 创建新的异步请求
//  var backoff = new Promise(function(resolve) {
//   setTimeout(function() {
//    resolve();
//   }, config.retryDelay || 1);
//  });
//  // 返回axios信息，重新请求
//  return backoff.then(function() {
//   return axios(config);
//  });
// });

// axios.get('/some/endpoint', { retry: 5, retryDelay: 1000 })
//     .then(function(res) {
//         console.log('success', res.data);
//     })
//     .catch(function(err) {
//         console.log('failed', err);
//     });