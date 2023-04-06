import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'

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
        let token:string|undefined = Cookies.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
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
        const { status, statusText, data } = response
        // 根据自定义错误码判断请求是否成功
        if (status === 201 || status === 200) {
          // 将组件用的数据返回
          return data
        } else {
          // 处理业务错误。
          return Promise.reject(new Error(statusText))
        }
    },
    (error: any) => {
        // do something
        httpErrorStatusHandle(error); // 处理错误状态码
        return Promise.reject(error);
    }
);
function httpErrorStatusHandle(error: any) {
    if(axios.isCancel(error)) return console.error('请求的重复请求：' + error.message);
    let message = '';
    if (error && error.response) {
      switch(error.response.status) {
        case 302: message = '接口重定向了！';break;
        case 400: message = '参数不正确！';break;
        case 401: message = '您未登录，或者登录已经超时，请先登录！';break;
        case 403: message = '您没有权限操作！'; break;
        case 404: message = `请求地址出错: ${error.response.config.url}`; break; // 在正确域名下
        case 408: message = '请求超时！'; break;
        case 409: message = '系统已存在相同数据！'; break;
        case 500: message = '服务器内部错误！'; break;
        case 501: message = '服务未实现！'; break;
        case 502: message = '网关错误！'; break;
        case 503: message = '服务不可用！'; break;
        case 504: message = '服务暂时无法访问，请稍后再试！'; break;
        case 505: message = 'HTTP版本不受支持！'; break;
        default: message = '异常问题，请联系管理员！'; break
      }
    }
    if (error.message.includes('timeout')) message = '网络请求超时！';
    if (error.message.includes('Network')) message = window.navigator.onLine ? '服务端异常！' : '您断网了！';
    console.error(message)
    
}
export default service;