function status(el, binding, vnode) {
    if (binding.value == 1) {
        el.style.color = '#409eff'
        el.innerHTML = '启用'
    } else {
        el.style.color = 'red'
    }
}
export default {
    bind: function (el, binding, vnode) {
        status(el, binding, vnode)
    },
    update: function (el, binding, vnode) {
        status(el, binding, vnode)
    }
}