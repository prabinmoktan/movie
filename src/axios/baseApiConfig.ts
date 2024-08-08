import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosRequestConfig, AxiosError } from 'axios';
import { axiosInstance } from './axios';



export const BASE_API_SLICE = 'baseApi';
const AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;


const baseQuery: BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig['method'];
    params?: AxiosRequestConfig['params'];
    body?: AxiosRequestConfig['data'];
    headers?: AxiosRequestConfig['headers'];
    auth?: boolean;
  },
  unknown,
  { status: number; data: unknown }
> = async ({ url, method, params, body, headers, auth }) => {
  try {
    const { data } = await axiosInstance.request({
      url,
      method,
      params,
      data: body,
      headers: {
        ...headers,
        accept: 'application/json',
        ...(auth && AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {}), 
      },
    });

    return { data };
  } catch (axiosError) {
    const error = axiosError as AxiosError;

    if (error.response?.status === 400) {
      console.log(error.response);
    } else if (
      error.response?.status === 401 &&
      error.response.data === 'token_not_valid'
    ) {
      
      console.log('Login session expired, login again.');
    }

    return {
      error: {
        status: error.response?.status ?? 500,
        data: error.response?.data ?? 'Unknown error',
      },
    };
  }
};

export const baseApiSlice = createApi({
  reducerPath: BASE_API_SLICE,
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['CurrentAuthUser'],
});