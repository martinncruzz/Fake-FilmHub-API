import axios, { AxiosRequestConfig } from 'axios';

import { HttpResponse } from '../../../domain';

export class AxiosAdapter {
  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return axios
      .get(url, config)
      .then((response) => ({ data: response.data }))
      .catch((error) => ({ error: AxiosAdapter.handleError(error) }));
  }

  static async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return axios
      .post(url, data, config)
      .then((response) => ({ data: response.data }))
      .catch((error) => ({ error: AxiosAdapter.handleError(error) }));
  }

  static async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return axios
      .put(url, data, config)
      .then((response) => ({ data: response.data }))
      .catch((error) => ({ error: AxiosAdapter.handleError(error) }));
  }

  static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return axios
      .delete(url, config)
      .then((response) => ({ data: response.data }))
      .catch((error) => ({ error: AxiosAdapter.handleError(error) }));
  }

  private static handleError(error: any): string {
    console.error({
      message: error.message,
      ...(error.response && {
        status: error.response.status,
        data: error.response.data,
      }),
      ...(error.config && {
        url: error.config.url,
        method: error.config.method,
      }),
    });

    return 'Axios error';
  }
}
