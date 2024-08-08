// import React from "react";

import { useParams } from "react-router-dom";
import { Box, Typography, Grid, Container } from "@mui/material";
import "./movieDetail.css";
import { useGetMobileDetailQuery, useLazyGetMovieTrailerQuery } from "./detail.api";
import TitleTypography from "../../ui/TitleTypography";


const MovieDetailPage = () => {
  const { id } = useParams();
 
  // @ts-ignore
  const { data: movie, error, isLoading } = useGetMobileDetailQuery(id);
  // @ts-ignore
  const [trigger,{data}] = useLazyGetMovieTrailerQuery(id)

 



  return (
    <>
      <Box p={2} sx={{ background: "black" }}>
        <Box
          sx={{
            background: `url(${
              "https://image.tmdb.org/t/p/original" + movie?.backdrop_path
            }) no-repeat center center`,
            backgroundSize: "cover",
            borderRadius: "10px",
            height: "96vh",
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            py:'1rem'
          }}
        >
          <Container sx={{ width: "80%" }}>
            <Grid
              item
              sm={6}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
                alt="movie picture"
                style={{ maxWidth: "300px", width: "80%", maxHeight: "400px" }}
                className="image-border"
                height={"80%"}
              />
            </Grid>
          </Container>
          <Container>
            <Grid
              container
              justifyContent={"space-evenly"}
              mt={2}
              className="detailcard"
              py={2}
            >
              <Grid
                item
                xs={12}
                md={2}
                sx={{ placeItems: "center" }}
                className="detail-img"                
              >
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + movie?.poster_path
                  }
                  alt="movie.title"
                  width={"120px"}
                  className="imagebox"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <div>
                  <TitleTypography title={movie?.title}/>
                  <Grid item container sx={{ display: "flex", gap: "2px" }}>
                    <Typography>Genres:</Typography>

                    {Array.isArray(movie?.genres) &&
                      movie?.genres.map((genre) => (
                        <Typography
                          key={genre.id}
                          sx={{ background: "grey", borderRadius: "5px" }}
                          px={1}
                        >
                          {genre.name}
                        </Typography>
                      ))}
                  </Grid>
                </div>
                <div>
                  <Typography variant="body2">{movie?.tagline}</Typography>
                </div>
                <div>
                  <Typography variant="body2">{movie?.overview}</Typography>
                </div>
                <div>
                  <Typography>Release Date: {movie?.release_date}</Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default MovieDetailPage;
