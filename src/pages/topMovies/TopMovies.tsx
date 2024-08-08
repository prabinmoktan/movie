import { useEffect, useState } from "react";
import { movieCardInterface } from "../../interface/global.interafce";
// import Cards from '../components/Cards'

import { Grid, Skeleton, Stack } from "@mui/material";
import Loader from "../../services/loader/Loader";
import MovieCard from "../../components/MovieCard";
import { useGetMovieQuery } from "./redux/topMovies.api";

const TopMovies = () => {
  // const [topMovies, setTopMovies] = useState<movieCardInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetMovieQuery({ page });
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    if (data?.results) {
      // @ts-ignore
      setTopMovies((prev) => [...prev, ...data.results]);
    }
  }, [data]);

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
            paddingTop:'3rem'
          }}
        >
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
                <Skeleton
                  height={400}
                  width={180}
                  animation={"wave"}
                  key={index}
                  sx={{ background: "grey" }}
                />
              ))
            : topMovies &&
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
