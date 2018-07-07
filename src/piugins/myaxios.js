import axios from 'axios';

const MyAxios = {};

// 插件必须有一个公开的install方式
// vue.use(MyAxios); 在use内部会调用  
// 在main.js 注册MyAxios 插件

MyAxios.install = function (Vue) {
    axios.defaults.baseURL='http://localhost:3000/';
    Vue.prototype.$http = axios;
}

export default MyAxios;