// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocket from 'vue-socket.io'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueSocket, 'http://127.0.0.1:6879')
/* eslint-disable no-new */
new Vue({
  sockets: {
    connect: function () {
      console.log('okok')
    }
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
