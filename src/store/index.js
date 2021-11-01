import Vue from 'vue'
import Vuex from 'vuex'
import { SUBNUM } from './mutation_types'

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
    [SUBNUM] (state, val) {
      state.num = state.num * 2 + val
    },
    editVal (state, val) {
      console.log(val)
      // state.text += val
    },
    changeText (state, val) {
      state.text += val
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
  },
  // 异步修改state
  actions: {
    timeOut (context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('changeText', payload)
          resolve('111')
        }, 1000)
      })
    }
  }
})

// 导出
export default store
