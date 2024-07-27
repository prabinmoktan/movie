import { movieCardInterface } from "../../interface/global.interafce";
import { Grid, Skeleton } from "@mui/material";
import MovieCard from "../MovieCard";
import { useTrendingQuery } from "./redux/trending.api";

import './trending.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Trending = ({ limit }: any) => {

  const { data, isLoading } = useTrendingQuery();
  const trendingData = data?.results;
  

  const displayMovies = limit ? trendingData?.slice(0, limit) : trendingData;
  const skel = limit || 20;
 
  
  return (
    <>
    
      <Grid
        item
        container
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        py={4}
        rowGap={4}
        maxWidth={"1280px"}
        margin={"auto"}
        // height={'100%'}
      >
        {isLoading?
         Array.from({ length: skel }).map((_, index) => (
              <Skeleton
                height={400}
                width={220}
                animation={"wave"}
                key={index}
                sx={{ background: "grey" }}
              />
            ))
          : displayMovies?.map((movie: movieCardInterface) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
      </Grid>
    </>
  );
};

export default Trending;
