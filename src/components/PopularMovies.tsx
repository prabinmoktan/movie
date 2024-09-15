import { useEffect, useState } from "react";
import { popularMovies } from "../services/axios.service";
import { Box, Typography } from "@mui/material";
import { popularMovieInterface } from "../interface/global.interafce";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const PopularMovies = () => {
  const [popular, setPopular] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: "600px" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomNext = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <GrNext />
      </div>
    );
  };
  const CustomPrev = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <GrPrevious />
      </div>
    );
  };

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    initialSlide: 0,
    // autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          centerPadding: "60px",
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  const getPopularMovies = async () => {
    const response = await popularMovies();

    setPopular(response.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <>
      <Box
        width={"100%"}
        margin={"auto"}
        paddingBottom={4}
        maxWidth={1280}
        overflow={isMobile ? "hidden" : ""}
      >
        <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
          Popular Actors
        </Typography>

        <Slider {...setting}>
          {popular &&
            popular.map((movie: popularMovieInterface) => {
              return (
                <Box
                  key={movie.id}
                  sx={{
                    px: "2rem",
                    // width: "100%",
                    gap: "2rem",
                  }}
                >
                  <Box
                    sx={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        movie.profile_path
                      }
                      alt={movie.name}
                      // height={"220px"}
                      // width={"100%"}
                    />
                    <Typography
                      variant="h6"
                      color={"white"}
                      textAlign={"center"}
                    >
                      {movie.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
        </Slider>
      </Box>
    </>
  );
};

export default PopularMovies;
