import { baseApiSlice } from "../../../axios/baseApiConfig";
import {  TvShowDetailsResponse, tvShowsResponse } from "../../../interface/global.interafce";

const tvShowsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTvShows: builder.query<tvShowsResponse, void>({
      query: () => ({
        url: `/trending/tv/day?language=en-US&adult=true`,
        method: 'GET',
        auth: true,

      }),
    }),
    getTvShowDetail: builder.query<TvShowDetailsResponse , void>({
        query: (id) => ({
            url: `/tv/${id}?language=en-US`,
            method: "GET", 
            auth: true,
        })
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTvShowVideo : builder.query<any, void>({
        query:(id) => ({
            url: `tv/${id}/videos?language=en-US`,
            method: 'GET',
            auth: true
        })
    })

  }),
  
  
});
export const { useGetTvShowsQuery, useGetTvShowDetailQuery, useLazyGetTvShowVideoQuery } = tvShowsApiSlice;
