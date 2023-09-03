import { moviesTrending } from "../services/axios.service";
import { useState, useEffect } from "react";
import { Typography, Stack , Box } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { movieCardInterface } from "../interface/global.interafce";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([])

  const moviesData = async () => {
    const response = await moviesTrending();
    console.log(response.results);
    setTrendingMovies(response.results);
  };
  useEffect(() => {
    moviesData();
  }, []);

  return (
    <>
      {/* <Stack direction={"column"} spacing={4}> */}
        <Box>
        <Typography variant="h2">Trending Movies</Typography>
        </Box>
        <Stack flexDirection={"row"} sx={{flexWrap:"wrap", justifyContent:"space-between"}} >
        {
            trendingMovies && 
            trendingMovies.map((movie: any) => {
            return (
                <MovieCard key={movie.id} movie={movie}/>
            )
           })
        }
        </Stack>
        
      {/* </Stack> */}
    </>
  );
};

export default TrendingMovies;
