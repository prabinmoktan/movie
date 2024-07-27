import { useEffect, useState } from "react";
import { topRated } from "../services/axios.service";
import { movieCardInterface } from "../interface/global.interafce";
// import Cards from '../components/Cards'

import { Grid, Stack } from "@mui/material";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState<movieCardInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const getTopMovies = async () => {
    const response = await topRated(page);
    // setTopMovies(response)
    console.log(response);
    setTopMovies((prev) => (prev ? [...prev, ...response] : [response]));
    setLoading(true);
  };

  useEffect(() => {
    getTopMovies();
  }, [page]);

  const scrollHandle = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
  }, []);
  return (
    <>
      <Stack sx={{ background: "#100F10" }}>
        <Grid
          container
          sx={{
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            backgroundColor: "#100F10",
            maxWidth: "1280px",
            margin: "auto",
            gap: "2rem",
          }}
        >
          {topMovies &&
            topMovies?.map((topMovie: movieCardInterface) => {
              return <MovieCard movie={topMovie} key={topMovie.id} />;
            })}
        </Grid>
        {loading ? <Loader /> : null}
      </Stack>
    </>
  );
};

export default TopMovies;
