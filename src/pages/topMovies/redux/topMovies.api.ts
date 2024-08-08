import { baseApiSlice } from "../../../axios/baseApiConfig";
import {  TrendingResponse } from "../../../interface/global.interafce";

const movieDetailSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovie: builder.query<TrendingResponse, { page: number }>({
      query: ({ page }) => ({
        url: `/movie/top_rated?language=en-US&page=${page}`,
        method: "GET",
        auth: true,
      }),
    }),
  }),
});
export const { useGetMovieQuery } = movieDetailSlice;
