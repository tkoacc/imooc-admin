import { createStore } from 'vuex'
import user from './modules/user.js'
import getters from './getters.js'
import app from './modules/app.js'
import theme from './modules/theme.js'

export default createStore({
  state: {
  },
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    app,
    theme
  }
})
