import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
const service = axios.create({
    baseURL: "http://localhost:3000",// 基准地址
    timeout: 5000, // 超时时间
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
});
// Request interceptors
//请求拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // do something
        let token:string|null = localStorage.getItem('token')
        if (token) {
            config.headers.token = token
        }
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);
// Response interceptors
// 响应拦截器
service.interceptors.response.use(
    async (response: AxiosResponse<any, any>) => {
        // do something
        const { code, message, data } = response.data

        // 根据自定义错误码判断请求是否成功
        if (code === 0) {
          // 将组件用的数据返回
          return data
        } else {
          // 处理业务错误。
          return Promise.reject(new Error(message))
        }
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    }
);
export default service;