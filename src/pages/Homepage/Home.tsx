import { Box } from "@mui/material";

import { Link } from "react-router-dom";
import PopularMovies from "../../components/PopularMovies";
import Trending from "../../components/trendingMovies/Trending";
import "./home.css";
import Carousel from "../../components/carousel/Carousel";
// import { useState } from 'react'

const Home = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#100F10" }}>
        <Carousel />
        <Box py={4}>
          <PopularMovies />
        </Box>
        <div>
          <div className="title">
            <Link to={"/trendingMovies"}>View All</Link>
          </div>
          <Trending limit={4} />
        </div>
      </Box>
    </>
  );
};

export default Home;
