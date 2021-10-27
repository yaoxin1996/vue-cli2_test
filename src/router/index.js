// vue-router相关配置

// 引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
const Home = () => import('../components/home')
// import Home from '../components/home'
// import About from '../components/about'
const News = () => import('../components/homeNews')
const Message = () => import('../components/homeMessage')
const Profile = () => import('../components/profile')
// 1. 通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2. VueRouter
const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      }, {
        path: 'news',
        component: News
      }, {
        path: 'message',
        component: Message
      }
    ]
  }, {
    path: '/about/:id',
    component: () => import('../components/about')
  }, {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history'
})

// 3. 挂载到Vue实例上 (在main.js页面挂载)
export default router
