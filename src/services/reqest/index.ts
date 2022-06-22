import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestConfig } from './types';
import { ElLoading, LoadingOptionsResolved } from 'element-plus';

let IS_LOADING = true;

export default class AxiosRequest {
  instance: AxiosInstance;
  showLoading?: boolean;
  loading?: any;

  constructor(requestConfig: RequestConfig) {
    const { interceptors, showLoading } = requestConfig;
    this.instance = axios.create(requestConfig);
    this.showLoading = IS_LOADING;

    this.instance.interceptors.request.use(
      interceptors?.requestInterceptor,
      interceptors?.requestInterceptorCatch,
    );

    this.instance.interceptors.response.use(
      interceptors?.reponseInterceptor,
      interceptors?.requestInterceptorCatch,
    );

    this.instance.interceptors.request.use(
      (config) => {
        let token = '';
        // if (token) config.headers.Authorization = `Bearer ${token}`;

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '数据加载中...',
            background: 'rgba(0 , 0 , 0 , .3)',
          });
        }

        return config;
      },
      (err) => {
        console.log('全局请求处理错误', err);
        return err;
      },
    );

    this.instance.interceptors.response.use(
      (response) => {
        this.loading?.close();

        this.showLoading = true;
        return response.data;
      },
      (err) => {
        console.log(err);
        this.showLoading = true;
        return err;
      },
    );
  }

  request<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
    if (config.showLoading === false) this.showLoading = config.showLoading;
    return this.instance.request<T>(config);
  }
  get<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  patch<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}
