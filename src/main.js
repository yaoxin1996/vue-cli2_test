import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
Vue.config.productionTip = false

// 123.207.32.32:8000/home/multidata

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
})
