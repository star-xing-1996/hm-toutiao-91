import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  // 放置数据的地方
  state: {
    user: auth.getUser()
  },
  // 修改数据必须通过mutations
  mutations: {
    updateUser (state, payload) {
      state.user = payload.user // 数据更新
      auth.setUser(payload.user) // 将数据同步设置到本地存储中
    },
    clearUser (state) {
      state.user = {}
      auth.delUser() // 将缓存中的数据也清空
    }
  },
  // 清空user
  actions: {
  },
  modules: {
  }
})
