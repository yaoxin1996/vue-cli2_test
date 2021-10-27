<template>
  <div id="app">
    <button @click="toHome">首页</button>
    <router-link v-bind:to="'/about/' + Id" tag="div">关于</router-link>
    <button @click="toAbout">关于</button>
    <router-link
      v-bind:to="{path: '/profile', query: {name: '张三', age: 18}}">
      我的
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      Id: 35
    }
  },
  methods: {
    toHome () {
      this.$router.push({path: '/home', query: {type: 5}})
    },
    toAbout () {
      this.$router.push('/about/' + this.Id)
    }
  }
}
</script>

<style>
</style>
