import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
const service = axios.create();
// Request interceptors
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);
// Response interceptors
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