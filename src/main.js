// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import vueSource from 'vue-source'
import socketio from './socket'
// import VueSocketio from 'vue-socket.io'
// import socketio from 'socket.io-client'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.prototype.$http = vueSource
Vue.prototype.eventBus = new Vue()
Vue.prototype.$socket = socketio

// Vue.use(VueSocketio, socketio('http://127.0.0.1:8989'))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
