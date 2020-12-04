console.log(process.env.URL);

if ('development' == process.env.NODE_ENV) {
    // 开发环境
} else {
    //生产环境
}

import axios from 'axios'

axios.defaults.timeout = 1000 * 15
axios.interceptors.response.use((res) => {
    return res
}, (error) => {
    return error
})
axios.interceptors.request.use((res) => {
    return res
}, (erro) => {
    return Promise.reject(erro)
})
let baseurl = 'http://127.0.0.1:8081'

export const Post = (url, params) => {
    return axios.post(`${baseurl}${url}`, params).then(data => data)
}
// Get
export const Get = (params, url) => {
    return axios.get(`${baseurl}${url}`, params).then(data => data)
}