<template>
  <div id="app">
    <tabbar></tabbar>
  </div>
</template>
<script>
import Tabbar from './components/tabber/tabbar.vue'
export default {
  components: {
    Tabbar
  },
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
@import './assets/css/base.css';
</style>
