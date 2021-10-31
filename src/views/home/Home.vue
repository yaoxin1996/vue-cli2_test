<template>
  <div>
    首页{{$store.state.num}}
    {{$store.state.num}}
    <button @click="addNum">+</button>
    <h1>{{ $store.getters.getText('李银河') }}</h1>
    <h2>{{ $store.state.text }}</h2>
    <button @click="editText">文案</button>
  </div>
</template>
<script>
export default {
  methods: {
    addNum () {
      this.$store.commit('subNum', 'test')
    },
    editText () {
      this.$store.commit({
        type: 'editVal',
        obj: {
          type: '123',
          name: '罗飞'
        }
      })
    }
  }
}
</script>
<style scoped>

</style>
