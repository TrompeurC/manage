import Request from './reqest';
import { BASE_URL, TIME_OUT } from './reqest/config';

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('请求拦截器');
      return config;
    },
    requestInterceptorCatch(err) {
      // console.log('请求失败拦截器');
    },
    reponseInterceptor(reponse) {
      // console.log('相应拦截器');
      return reponse;
    },
    reponseInterceptorCatch(err) {
      // console.log('相应失败的拦截器');
    },
  },
});

request.request({
  url: '/api',
  showLoading: false,
});
setTimeout(() => {
  request.request({
    url: '/api',
  });
}, 10000);
