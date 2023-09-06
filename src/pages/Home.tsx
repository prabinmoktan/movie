import React from 'react'
import Appnav from '../components/Appnav'
import PopularMovies from '../components/PopularMovies'
import TrendingMovies from './TrendingMovies'
import { Box } from '@mui/material'
import MovieCarousel from '../components/MovieCarousel'
import Series from './Series'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
   <Box sx={{backgroundColor:"#100F10"}}>

   
   
   <MovieCarousel/>
   <PopularMovies/>
   <TrendingMovies/>
   
   </Box>
   </>
  )
}

export default Home