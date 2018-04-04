import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes_store.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
