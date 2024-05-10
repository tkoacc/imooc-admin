import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers.icode = 'helloqianduanxunlianying' // 设置icode
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

export default service
