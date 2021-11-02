<template>
  <div>
    分类
  </div>
</template>
<script>
import { request } from '@/network/request'
export default {
  methods: {
    getVal () {
      request({
        url: '/home/multidata?id=55'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getVal()
  }
}
</script>
<style scoped>

</style>
