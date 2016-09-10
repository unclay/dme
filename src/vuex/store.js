import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  path: '',
  demos: []
}

const mutations = {
  UPDATE_PATH (state, path) {
    state.path = path
  },
  ADD_DEMOS (state, demo) {
    state.demos.push(demo)
  },
  INCREMENT (state) {
    state.count++;
  }
}

export default new Vuex.Store({
  state,
  mutations
})