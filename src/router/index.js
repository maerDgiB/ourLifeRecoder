import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../views/login/login.vue'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      // component: resolve => require(['../views/home/home.vue'], resolve),
      component: Home,
      children: [
        {path: '/', component: resolve => require(['../views/waterList/waterList.vue'], resolve)}
      ]
    }
  ]
})
