import { baseApiSlice } from "../../axios/baseApiConfig";
import { movieDetailInterface } from "../../interface/global.interafce";

const movieDetailSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMobileDetail: builder.query<movieDetailInterface, void>({
      query: (id) => ({
        url: `/movie/${id}?language=en-US`,
        method: "GET",
        auth: true,
      }),
    }),
    
      getMovieTrailer: builder.query<movieDetailInterface, void>({
        query: (id) => ({
          url: `/movie/${id}/videos?language=en-US`,
          method: "GET",
          auth: true,
        }),
      }),
    
  }),
});
export const { useGetMobileDetailQuery, useLazyGetMovieTrailerQuery } = movieDetailSlice;
