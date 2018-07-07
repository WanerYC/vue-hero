<template>
  <div id="app">
    <!-- 提取头部到components -> AppHeader.vue -->
    <!-- 引入头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 提取侧边栏到 component是 -> AppSidebar -->
        <!-- 引入侧边栏组件 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 主内容区 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// 将头部组件引入
import AppHeader from './components/AppHeader.vue';
// 将侧边栏引入
import AppSidebar from './components/AppSidebar';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    // 配置头部的组件
    AppHeader,
    // 配置侧边栏的组件
    AppSidebar
  }
}
</script>

<style>

</style>
