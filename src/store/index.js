import Vue from 'vue'
import Vuex from 'vuex'
import app from './app/'
import cadastro from '../views/cadastro/store'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    app,
    cadastro
  }
})
