<template>
  <div>
    首页{{$store.state.num}}
    {{$store.state.num}}
    <button @click="addNum">+</button>
    <h1>{{ $store.getters.getText('李银河') }}</h1>
    <h2>{{ $store.state.text }}</h2>
    <button @click="editText">添加</button>
    <button @click="setTimeoutTest">action</button>
  </div>
</template>
<script>
import { SUBNUM } from '@/store/mutation_types'
export default {
  methods: {
    addNum () {
      this.$store.commit(SUBNUM, 'test')
    },
    editText () {
      this.$store.commit({
        type: 'editVal',
        obj: {
          type: '123',
          name: 'zhangsan'
        }
      })
    },
    setTimeoutTest () {
      this.$store.dispatch('timeOut', '传入的数据').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>

</style>
