import { Stack, Grid, Box, Skeleton } from "@mui/material";
import { cardItemTypes } from "../../interface/global.interafce";
import MovieCard from "../../components/MovieCard";
import { useGetTvShowsQuery } from "./redux/tvShows.api";
import TitleTypography from "../../ui/TitleTypography";

// import { useNavigate } from "react-router-dom";

const Tvshows = () => {
  const { data, isLoading } = useGetTvShowsQuery();
  const shows = data?.results;

  return (
    <>
      <Stack width={"100%"} sx={{ background: "#100F10" }} py={4}>
        <Box py={4}>
          <TitleTypography title="TV Series" />
        </Box>
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
          {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <Skeleton
                height={400}
                width={180}
                animation={"wave"}
                key={index}
                sx={{ background: "grey" }}
              />
            )) :
          shows &&
            shows.map((show: cardItemTypes) => {
              return <MovieCard movie={show} key={show.id} />;
            })}
        </Grid>
      </Stack>
    </>
  );
};

export default Tvshows;
