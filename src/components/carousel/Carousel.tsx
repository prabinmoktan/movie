// import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./carousel.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { movieCardInterface } from "../../interface/global.interafce";
import { Grid, Typography } from "@mui/material";
import TitleTypography from "../../ui/TitleTypography";
import { useTrendingAllQuery } from "../trendingMovies/redux/trending.api";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    // prevArrow: <FaArrowLeft />,
    // nextArrow: <FaArrowRight />,
  };
  // const [data, setData] = useState([]);
  const { data } = useTrendingAllQuery();
  const movies = data?.results;

  return (
    <>
      <div className="containerbox">
        <Slider {...settings} className="slides">
          {movies &&
            movies.map((item: movieCardInterface) => (
              <div key={item.id} className="slide">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + item.backdrop_path
                  }
                  alt={item.title}
                />

                <Grid item xs={10} sm={6} md={4} className="detailbox">
                  <div className="details">
                    <TitleTypography title={item.title || item.name} />

                    <Typography variant="body2" color={"white"} mt={2}>
                      {item.overview}
                    </Typography>
                  </div>
                </Grid>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
