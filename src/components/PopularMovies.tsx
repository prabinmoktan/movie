import { useEffect, useState } from "react";
import { popularMovies } from "../services/axios.service";
import {  Box, Typography } from "@mui/material";
import {
 
  popularMovieInterface,
} from "../interface/global.interafce";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const PopularMovies = () => {
  const [popular, setPopular] = useState([]);

  function Arrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    <Box width={"90%"} margin={"auto"} >

   
           <Typography variant='h4' sx={{color:"white",  textAlign:"center"}}>Popular Actors</Typography>

      <Slider {...setting} >

        {popular &&
          popular.map((movie: popularMovieInterface) => {
            return( <Box key={movie.id} sx={{":hover":{
                scale: "1.2",
                transform: "initial",
                transition:".3s"
            }}}>
                    <img src={'https://image.tmdb.org/t/p/original'+movie.profile_path} alt={movie.name} height={"300px"} />
                    <Typography variant="h6" color={"white"} textAlign={"center"}>{movie.name}</Typography>
            </Box>);
          })}
      </Slider>
      </Box>
    </>
  );
};

export default PopularMovies;
