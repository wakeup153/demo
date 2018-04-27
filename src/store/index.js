import Vue from 'vue'
import Vuex from 'vuex'
import socketStore from '@/store/module/socketStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    socketStore
  }
})
