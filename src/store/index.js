import Vue from 'vue'
import Vuex from 'vuex'
import socket from '@/store/module/socketStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    socket
  }
})
