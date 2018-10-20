import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../views/login/login.vue'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        requireAuth: true
      },
      component: resolve => require(['../views/home/home.vue'], resolve),
      children: [
        {path: '/', component: resolve => require(['../views/waterList/waterList.vue'], resolve)}
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    if (localStorage.getItem('token')) { // 判断是否登录
      next()
    } else { // 没登录则跳转到登录界面
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
