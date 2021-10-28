<template>
  <div id="app">
    <button @click="toHome">首页</button>
    <router-link :to="'/about/' + msg">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      msg: 'aaa'
    }
  },
  methods: {
    toHome () {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
.active {
  color: #fff;
}
</style>
