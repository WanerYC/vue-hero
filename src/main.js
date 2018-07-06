import Vue from 'vue'
import App from './App.vue'

// 引入bootstrap.css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
})