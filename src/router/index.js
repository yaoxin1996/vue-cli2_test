import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Cart = () => import('views/cart/cart')
const Profile = () => import('views/profile/profile')

// 使用
Vue.use(VueRouter)

// 创建实例
const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/category',
  component: Category
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: Profile
}]
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 导出
export default router
