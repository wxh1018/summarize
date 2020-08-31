import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

function lazy(name) {
  return () => import('@/views/' + name)
}
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      component: lazy('index.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: lazy('menu/menu.vue'),
    },
  ]
})

export default router
