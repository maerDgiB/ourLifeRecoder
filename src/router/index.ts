import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
// import Home from '../views/home/home.vue'

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'login',
    component: resolve => require(['../views/login/login.vue'], resolve),
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['../views/home/home.vue'], resolve),
    // component: Home,
    children: [
      { path: '/', component: resolve => require(['../views/waterList/waterList.vue'], resolve) }
    ]
  }
];

export default new Router({
  routes,
});
