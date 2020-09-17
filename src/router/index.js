import Vue from 'vue'
import Router from 'vue-router'

function lazy1(name) {
  return () => import('@/components/' + name)
}
function lazy(name) {
  return () => import('@/views/' + name)
}
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: lazy('index.vue'),
    },
    {
      path: '/search_area_data',
      name: 'search_area_data',
      component: lazy1('search_area.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: lazy('menu/left.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: lazy('upload'),
    },
  ]
})

export default router
