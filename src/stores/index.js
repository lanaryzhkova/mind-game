import { createStore } from 'vuex'
import {metamaskModule} from "/src/stores/metamaskModule";
import {getModule} from "/src/stores/getModule";
import {authModule} from "/src/stores/authModule";



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
    get: getModule,
    auth: authModule
  }
})