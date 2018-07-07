import Vue from 'vue'
import App from './App.vue'

import router from './routes/router'

// 引入bootstrap.css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import MyAxios from './piugins/myaxios';


// 引入 axios 提取出每页引入axios的公共部分
// import axios from 'axios';
// 给vue实例上增加axios属性
// Vue.prototype.$http = axios;
// 设置baseUrl
// axios.defaults.baseURL='http://localhost:3000/';

// 上面的功能封装成立自定义的插件
Vue.use(MyAxios);


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
