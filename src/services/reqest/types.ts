import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  reponseInterceptor?: (reponse: AxiosResponse) => AxiosResponse;
  reponseInterceptorCatch?: (err: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptor;
  // config: AxiosRequestConfig;
  showLoading?: boolean;
}
