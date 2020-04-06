import axios from "axios";
// import Cookies from 'js-cookie'
import { Message } from "element-ui";

const _axios = axios.create({
  baseURL: "http://123.207.60.132:7001",
  // baseURL: "http://127.0.0.1:7001",
  timeout: 20000,
  headers: {}
});

_axios.interceptors.request
  .use
  // (config) => {
  //   if (Cookies.get('ACCESS_TOKEN')) config.headers['x-access-token'] = Cookies.get('ACCESS_TOKEN');
  //   return config;
  // },
  // (error) => {
  //   // Do something with request error
  //   return Promise.reject(error);
  // }
  ();

_axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("status", response.status);
      return response.data;
    }
  },
  error => {
    console.log(error.message);
    // 超时处理
    if (error.message.includes("timeout")) {
      Message.closeAll();
      Message({
        message: "请求超时",
        type: "error"
      });
    }
    if (error.message.includes("Network Error")) {
      Message.closeAll();
      Message({
        message: "网络错误",
        type: "error"
      });
    }
    return Promise.reject(error);
  }
);
export default _axios;
