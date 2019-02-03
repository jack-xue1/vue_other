//初始化axios配置

import axios from 'axios'

var instance = axios.create({
  headers: {
    'Content-Type': "application/json;charset=UTF-8"
  },
  timeout: 30000,
  //这个地方引用代理路径
  baseURL: '/apis',
})


instance.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error);
  return Promise.reject(error);
})

instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  const res = response.data;
  //对错误代码做处理
  return response;
}, error => {
  // 对响应错误做点什么
  console.log('err' + error)// for debug
  return Promise.reject(error);
});

export default instance;

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(response => {
      //对接口错误码做处理
      resolve(response.data);
    }, err => {
      reject(err);
    })
  })
}

