import  { useEffect, useState } from "react";
import Slider from "react-slick";
import "./carousel.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { moviesTrending } from "../../services/axios.service";
import { movieCardInterface } from "../../interface/global.interafce";
import { Grid, Typography } from "@mui/material";

const Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <FaArrowLeft />,
    // nextArrow: <FaArrowRight />,
  };
  const [data, setData] = useState([]);
  const getMovie = async () => {
    const response = await moviesTrending();
    console.log(response.results, 'response from carousel')
    setData(response.results);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <div className="container">
        <Slider {...settings} className="slides">
          {data &&
            data.map((item: movieCardInterface) => (
              <div key={item.id} className="slide">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + item.backdrop_path
                  }
                  alt={item.title}
                />

                <Grid item xs={10} sm={6} md={4} className="detailbox">
                  <div className="details">
                    <div>
                    <Typography variant="body2" color={"white"} display={"block"}>
                      {item.release_date}{item.adult}
                    </Typography>
                    </div>
                    <Typography variant="h5" color={"white"} display={"block"}>
                      {item.title}
                    </Typography>
                   
                    <Typography variant="body2" color={"white"}>
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
