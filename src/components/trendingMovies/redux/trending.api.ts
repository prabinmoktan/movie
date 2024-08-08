import { TrendingResponse } from "./../../../interface/global.interafce";
import { TRENDING_MOVIES_API } from "../../../axios/api";
import { baseApiSlice } from "../../../axios/baseApiConfig";
import { HTTP_METHODS } from "../../../axios/http";

export const moviesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    trending: builder.query<TrendingResponse, { page: number }>({
      query: ({ page }) => ({
        url: `${TRENDING_MOVIES_API}&page=${page}`,
        method: HTTP_METHODS.GET,
      }),
    }),
    trendingAll: builder.query<TrendingResponse, void>({
      query: () => ({
        url: `/trending/all/day?anguage=en-US`,
        method: "GET",
        auth: true,
      }),
    }),
  }),
});
export const { useTrendingQuery, useTrendingAllQuery } = moviesApiSlice;
