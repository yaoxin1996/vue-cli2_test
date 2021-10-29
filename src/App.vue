<template>
  <div id="app">
    <main-tab-bar/>
    <router-view></router-view>
  </div>
</template>
<script>
import MainTabBar from 'components/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>
<style scoped>
@import 'assets/css/base.css';
</style>
