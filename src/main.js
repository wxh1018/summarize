// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import basefn from 'nmp-test-npm'
Vue.prototype.basefn = basefn
Vue.config.productionTip = false
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import directive from './directive'
import * as filters from './filters'
import './api'
Vue.use(Element)


import './components'
import './utils'
Vue.use(directive)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
