import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  reponseInterceptor?: (reponse: AxiosResponse) => AxiosResponse;
  reponseInterceptorCatch?: (err: any) => any;
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptor<T>;
  // config: AxiosRequestConfig;
  showLoading?: boolean;
}
