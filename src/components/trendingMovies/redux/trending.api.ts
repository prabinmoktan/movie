import { TRENDING_MOVIES_API } from "../../../axios/api";
import { baseApiSlice } from "../../../axios/baseApiConfig";
import { HTTP_METHODS } from "../../../axios/http";
import { TrendingResponse } from "../../../interface/global.interafce";

export const moviesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    trending: builder.query<TrendingResponse, void>({
      query: () => ({
        url: TRENDING_MOVIES_API,
        method: HTTP_METHODS.GET,
      }),
    }),
  }),
});
export const { useTrendingQuery } = moviesApiSlice;
