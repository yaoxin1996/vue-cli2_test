// vue-router相关配置

// 引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Home from '../components/home'
import About from '../components/about'

// 1. 通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2. VueRouter
const routes = [
  {
    path: '/home',
    component: Home
  }, {
    path: '/about',
    component: About
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes
})

// 3. 挂载到Vue实例上 (在main.js页面挂载)
export default router
