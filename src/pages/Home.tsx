
import PopularMovies from '../components/PopularMovies'
import TrendingMovies from './TrendingMovies'
import { Box } from '@mui/material'
import MovieCarousel from '../components/MovieCarousel'
// import { useState } from 'react'


const Home = () => {

 
  return (
   <>
   <Box sx={{backgroundColor:"#100F10"}}>

   
   
   <MovieCarousel/>
   <PopularMovies/>
   <TrendingMovies />
   
   </Box>
   </>
  )
}

export default Home