import { Box, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import PopularMovies from "../../components/PopularMovies";
import Trending from "../../components/trendingMovies/Trending";
import "./home.css";
import Carousel from "../../components/carousel/Carousel";
import TrendingAll from "../../components/trendingAll/TrendingAll";
// import { useState } from 'react'

const Home = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#100F10" }}>
        <Carousel />
        <Box py={4}>
          <PopularMovies />
        </Box>
        <Grid container maxWidth={1280} margin={'auto'} gap={2} alignItems={'center'}>
          <Grid item xs={12} sm={8} md={8}>
            <div className="title">
              <Link to={"/trendingMovies"}>View All</Link>
            </div>
            <Trending limit={8} />
          </Grid>
          <Grid item xs={12} md={3.5} sm={3.5}>
            <TrendingAll limit={7}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
