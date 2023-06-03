import axios from "axios";
// @ts-ignore
import {useUserStore} from "../store/userStore.ts";
// 根据当前的env决定请求头
const baseURL_TEMP = import.meta.env.DEV ? import.meta.env.VITE_BASE_URL : import.meta.env.VITE_BASE_URL_PROD

const myAxios = axios.create({
    baseURL: baseURL_TEMP,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
}, function (error) {
    return Promise.reject(error);
});



// 气象的axios
const qiXiangAxios = axios.create({
    baseURL: "http://www.nmc.cn",
    timeout: 5000
});

// 添加请求拦截器
qiXiangAxios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
qiXiangAxios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
}, function (error) {
    return Promise.reject(error);
});


export {
    myAxios,
    qiXiangAxios
}
