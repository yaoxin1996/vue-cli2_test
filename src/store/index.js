import Vue from 'vue'
import Vuex from 'vuex'

// 安装vuex
Vue.use(Vuex)

// 创建实例
const store = new Vuex.Store({
  state: {
    num: 10,
    text: '你好啊'
  },
  // 同步修改state时
  mutations: {
    subNum (state, val) {
      state.num = state.num * 2 + val
    },
    editVal (state, val) {
      console.log(val)
      // state.text += val
    }
  },
  getters: {
    numAdd15 (state) {
      return val => state.num + 15 + val
    },
    getText (state, getters, val) {
      return val => {
        return state.text + val
      }
    }
  }
})

// 导出
export default store
