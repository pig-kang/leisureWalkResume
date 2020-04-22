import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    userId: null,
    currentUser: null,
    isLogin: false,
    token: ''
  },

  mutations: {
    userStatus (state, user) {
      if (user) {
        state.currentUser = user.userName
        state.userId = user.userId
        state.isLogin = true
      } else if (user == null) {
        // 登出的时候，清空sessionStorage里的东西
        localStorage.setItem('userName', null)
        state.currentUser = null
        state.isLogin = false
        state.token = ''
        state.userImage = null
      }
    }
  },
  actions: {
    setUser ({commit}, user) {
      commit('userStatus', user)
    }
  }
})

export default store
