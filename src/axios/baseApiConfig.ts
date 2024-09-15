import { createApi, BaseQueryFn, RootState } from "@reduxjs/toolkit/query/react";
import { AxiosRequestConfig, AxiosError } from "axios";
import { axiosInstance } from "./axios";

export const BASE_API_SLICE = "baseApi";
const TMDB_AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;

interface AuthTokens {
  TMDB_AUTH_TOKEN?: string;
  accessToken?: string; // Access token from cookies
}

const baseQuery: BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig["method"];
    params?: AxiosRequestConfig["params"];
    body?: AxiosRequestConfig["data"];
    headers?: AxiosRequestConfig["headers"];
    auth: AuthTokens;
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
        accept: "application/json",
        Authorization: `Bearer ${TMDB_AUTH_TOKEN}`,
        ...(auth?.accessToken ? { "X-Access-Token": auth.accessToken } : {}), // Include accessToken if provided
      },
    });
    console.log(' from baseconfig==>',data)
    return { data };
  } catch (axiosError) {
    const error = axiosError as AxiosError;

    if (error.response?.status === 400) {
      console.log(error.response);
    } else if (
      error.response?.status === 401 &&
      error.response.data === "token_not_valid"
    ) {
      console.log("Login session expired, login again.");
    }

    return {
      error: {
        status: error.response?.status ?? 500,
        data: error.response?.data ?? "Unknown error",
      },
    };
  }
};

export const baseApiSlice = createApi({
  reducerPath: BASE_API_SLICE,
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["CurrentAuthUser"],
  // @ts-ignore
  prepareHeaders: (headers, { getState }) => {
      // @ts-ignore
    const { accessToken } = (getState() as RootState).auth;
    headers.set("X-Access-Token", accessToken || "");
    return headers;
  },
});
