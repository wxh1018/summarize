import status from './status'
const install = function (Vue) {
    Vue.directive('status', status)
}
status.install = install
export default status