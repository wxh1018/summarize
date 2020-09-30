import Vue from 'vue'
// import basebtn from './xx-button'
// Vue.component(basebtn.name, basebtn)
// import foot from './xx-foot'
// Vue.component(foot.name, foot)

// import map from './map'
// Vue.component(map.name, map)

// import tab from './tab'
// Vue.component(tab.name, tab)


// import ipt from './input/input.vue'
// Vue.component(ipt.name, ipt)

// import iptnum from './input/ipt_num.vue'
// Vue.component(iptnum.name, iptnum)

// import suctip from './tipbox/suctip.vue'
// Vue.component(suctip.name, suctip)

// import upload from './upload/upload.vue'
// Vue.component(upload.name, upload)

// import step from './step/step.vue'
// Vue.component(step.name, step)


// import steps from './step/steps.vue'
// Vue.component(steps.name, steps)

const files = require.context('./', true, /\.vue$/)
files.keys().forEach(path => {
    let com = files(path)
    let name = com.default.name
    Vue.component(name, com.default)
})