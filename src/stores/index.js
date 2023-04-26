import { createStore } from 'vuex'
import {metamaskModule} from "/src/stores/metamaskModule";


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    metamask: metamaskModule,
  }
})