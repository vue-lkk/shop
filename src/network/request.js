import axios from 'axios'

export function request(config) {
    const intance = new axios.create({
        baseURL: 'http://152.136.185.210:8000',
        timeout: 5000
    })

    //请求拦截
    intance.interceptors.request.use(res => {
        // console.log(res)
        return res
    }, err => {
        console.log(err)
    })

    //响应拦截
    intance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console,
        log(err)
    });
    //本身返回一个promise
    return intance(config)
}