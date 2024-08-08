import { movieCardInterface } from "../../interface/global.interafce";
import { Grid, Pagination, Skeleton, Stack } from "@mui/material";
import MovieCard from "../MovieCard";
import { useTrendingQuery } from "./redux/trending.api";

import "./trending.css";
import { useState } from "react";


const Trending = ({ limit }: any) => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useTrendingQuery({ page });
  const trendingData = data?.results;
  

  const displayMovies = limit ? trendingData?.slice(0, limit) : trendingData;
  const skel = limit || 20;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (_e: any, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Grid
        item
        container
        display={"flex"}
        flexWrap={"wrap"}
        py={4}
        columnGap={3}
        rowGap={4}
        maxWidth={"1280px"}
        margin={"auto"}
       justifyContent={'center'}
      >
        {isLoading
          ? Array.from({ length: skel }).map((_, index) => (
              <Skeleton
                height={400}
                width={180}
                animation={"wave"}
                key={index}
                sx={{ background: "grey" }}
              />
            ))
          : displayMovies?.map((movie: movieCardInterface) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
       
      </Grid>
      {!limit && (
          <Stack spacing={2} bgcolor={"red"}>
            <Pagination
              count={10}
              shape="rounded"
              color="primary"
              sx={{ color: "whitesmoke" }}
              defaultPage={1}
              onChange={handleChange}
              page={page}
            />
          </Stack>
        )}
    </>
  );
};

export default Trending;
