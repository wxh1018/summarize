import Vue from 'vue'
// import Drawline from './map'
import filter from './filter'
import instruction from './instruction'

import { Failtip } from './tip'
Vue.prototype.Tip = Failtip

import send from './send'//组件传值
Vue.prototype.$em = send

import base from './base'//通用函数
Vue.prototype.base = base

import login_js from './login'//登录函数
Vue.prototype.login_js = login_js

import echarts from './echarts'
Vue.prototype.$echfn = echarts

import fun from './fun'
Vue.prototype.$cookie = fun

const files = require.context('./', false, /.js$/)
console.log(files);
const models = files.keys().reduce((models, modelpath) => {
    const name = modelpath.replace(/^\.\/(.*)\.\w+$/, '$1')
    console.log(name);
}, {})


export { map, filter, instruction }
