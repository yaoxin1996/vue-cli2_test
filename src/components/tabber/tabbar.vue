<template>
  <div id="tab-bar">
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.png" alt="" srcset="">
      <div>首页</div>
    </div>
    <div class="tab-bar-item">分类</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">我的</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  background: #f6f6f6;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, .08);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
img {
  width: 24px;
  height: 24px;
}
</style>
