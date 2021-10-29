<template>
  <Tabbar>
    <Tabbar-item path="/home" activeclass="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </Tabbar-item>
    <Tabbar-item path="/category" activeclass="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category-active.png" alt="">
      <div slot="item-text">分类</div>
    </Tabbar-item>
    <Tabbar-item path="/cart" activeclass="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart-active.png" alt="">
      <div slot="item-text">购物车</div>
    </Tabbar-item>
    <Tabbar-item path="/profile" activeclass="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.png" alt="">
      <div slot="item-text">我的</div>
    </Tabbar-item>
  </Tabbar>
</template>
<script>
import Tabbar from 'components/tabbar/tabbar.vue'
import TabbarItem from 'components/tabbar/tabbarItem.vue'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style scoped>

</style>
