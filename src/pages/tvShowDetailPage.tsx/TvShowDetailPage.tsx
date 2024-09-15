/* eslint-disable @typescript-eslint/ban-types */
import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import ReactPlayer from "react-player";
import {
  useGetTvShowDetailQuery,
  useLazyGetTvShowVideoQuery,
} from "../tvShows/redux/tvShows.api";
import "./tvShow.css";
import AppAutoComplete from "../../ui/AppAutoComplete/AppAutoComplete";
import { Video } from "../../interface/global.interafce";
import { useEffect, useState } from "react";

const TvShowDetailPage = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState("");

  const [
    trigger,
    { data: showVideo },
    //   @ts-ignore
  ] = useLazyGetTvShowVideoQuery(id);

  const videoOptions = showVideo?.results.map((video: Video) => video.name);
  //   @ts-ignore
  const { data: show, error, isLoading } = useGetTvShowDetailQuery(id);
  useEffect(() => {
    if (showVideo && showVideo.results.length > 0) {
      setSelectedVideo(showVideo.results[0]);
    }
  }, [showVideo]);

  const handleClick = () => {
    // @ts-ignore
    trigger(id);
  };
// @ts-ignore
  const handleChange = ( e: any,value: any | null) => {
    const select = showVideo?.results.find(
      (video: Video) => video.name === value
    );
    setSelectedVideo(select);
  };

  return (
    <>
      <Box p={2} sx={{ background: "black" }}>
        <Box
          sx={{
            background: `url(${
              "https://image.tmdb.org/t/p/original" + show?.backdrop_path
            }) no-repeat center center`,
            backgroundSize: "cover",
            borderRadius: "10px",
            height: "96vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            sm={6}
            md={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {!showVideo ? (
              <img
                src={"https://image.tmdb.org/t/p/original" + show?.poster_path}
                alt="show picture"
                className="image-border"
              />
            ) : selectedVideo ? (
              <ReactPlayer
                // @ts-ignore
                url={`https://www.youtube.com/watch?v=${selectedVideo?.key}`}
              />
            ) : (
              <Typography> Sorry Video is not available</Typography>
            )}
          </Grid>

          <Container>
            <Grid
              item
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
                    "https://image.tmdb.org/t/p/original" + show?.poster_path
                  }
                  alt="show.title"
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
                  <Box>
                    <Typography variant="h4">{show?.name}</Typography>
                    <Box
                      margin={"auto"}
                      component={"div"}
                      onClick={handleClick}
                      sx={{ cursor: "pointer" }}
                      display={"flex"}
                      justifyContent={"space-between"}
                      mb={1}
                      // height={'100%'}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          background: "grey",
                          borderRadius: "5px",
                          px: "0.5rem",
                          py: "0.2rem",
                          height: "100%",
                        }}
                      >
                        Watch Trailer
                      </Typography>
                      {showVideo?.results.length > 0 && (
                        <AppAutoComplete
                          width={250}
                          defaultValue={videoOptions[0]}
                          label="Watch Videos"
                          options={videoOptions}
                          onChange={handleChange}
                        />
                      )}
                    </Box>
                  </Box>

                  <Grid item container sx={{ display: "flex", gap: "2px" }}>
                    <Typography>Genres:</Typography>

                    {Array.isArray(show?.genres) &&
                      show?.genres.map((genre) => (
                        <Typography
                          key={genre.id}
                          sx={{
                            background: "grey",
                            borderRadius: "5px",
                            px: "0.5rem",
                            py: "0.2rem",
                          }}
                          variant="caption"
                        >
                          {genre.name}
                        </Typography>
                      ))}
                  </Grid>
                </div>
                <div>
                  <Typography variant="body2">{show?.tagline}</Typography>
                </div>
                <div>
                  <Typography variant="body2">{show?.overview}</Typography>
                </div>
                <div>
                  <Typography>Release Date: {show?.first_air_date}</Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default TvShowDetailPage;
