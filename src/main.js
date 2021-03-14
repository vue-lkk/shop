import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Fastclick from 'fastclick'
import lazyLoad from 'vue-lazyload'

import toast from './components/common/Toast/index'
// import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

//安装toast插件
Vue.use(toast)

Vue.use(lazyLoad, {
    loading: require("./assets/img/预加载图片.png")
})

//解决300毫秒延迟
Fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/w6';
// axios.defaults.timeout = 5000

// axios({
//     url: '/home/data',
//     params: {
//         type: 'sell',
//         page: 3
//     }
// }).then(res => {
//     console.log(res.data)
// })

// axios.all = ([axios({
//     url: 'http://152.136.185.210:8000/api/w6/home/multidata'
// }), axios({
//     url: 'http://152.136.185.210:8000/api/w6/home/data',
//     params: {
//         type: 'sell',
//         page: 2
//     }
// })]).then(res => {
//     console.log(res)
// })

//创建对应的axios的实例
// const intance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/w6',
//     timeout: 5000
// })

// intance({
//     url: '/home/data',
// }).then(res => {
//     console.log(res)
// })


// //封装axios
// export function request(config, success, error) {
//     const intance = axios.create({
//         baseURL: 'http://152.136.185.210:8000/api/w6',
//         timeout: 5000
//     })
//     intance(config).then(res => {
//         success(res)
//     }).catch(err => {
//         error(err)
//     })
// }

// //使用
// // import { request } from './request'
// request({
//     url: '/home/data',
//     params: {
//         type: 'sell',
//         page: 1
//     }
// }, res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

// //promise方式封装axios
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         const intance = axios.create({
//             baseURL: 'http://152.136.185.210:8000/api/w6',
//             timeout: 5000,
//         })
//         intance(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }

// //使用
// request({
//     url: '/home/data',
//     params: {
//         type: 'sell',
//         page: 1
//     }
// }).then(res => {
//     console.log(res)
// })


//promise方式封装axios
// export function request(config) {
//     const intance = axios.create({
//         baseURL: 'http://152.136.185.210:8000/api/w6',
//         timeout: 5000,
//     });
//     //axios请求拦截
//     intance.interceptors.request.use(sss => {
//         console.log(sss)
//         return sss
//     }, err => {
//         console.log(err)
//     });
//     //axios响应拦截
//     intance.interceptors.response.use(sss => {
//         console.log(sss)
//         return sss
//     }, err => {
//         console.log(err)
//     });
//     //因为intance()本身会返回promise
//     return intance(config)
// }

// //使用
// request({
//     url: '/home/data',
//     params: {
//         type: 'sell',
//         page: 1
//     }
// }).then(res => {
//     console.log(res)
// })