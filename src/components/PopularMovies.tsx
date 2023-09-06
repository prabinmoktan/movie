import  { useEffect, useState } from 'react'
import { popularMovies } from '../services/axios.service';
import { Stack, Box, Typography, Paper } from '@mui/material'
import { popularMovieInterface } from '../interface/global.interafce';
import Carousel from "react-material-ui-carousel"

const PopularMovies = () => {
    const [popular, setPopular ] = useState([]);    

    const getPopularMovies = async () => {
        const response = await popularMovies();
        
        setPopular (response.results)
    }

    useEffect(() => {
        getPopularMovies();
    }, [])

    
  return (
    <>
    <Typography variant='h4' sx={{color:"#8739F9", marginTop:"70px", textAlign:"center"}}>Popular Actors</Typography>
    <Stack direction={'row'} spacing={6}  sx={{backgroundColor:"#100F10", justifyContent:"center"}} >
    <Carousel sx={{width:"100%"}} indicators={false} >
        {
            popular && 
            popular?.map((movie: popularMovieInterface) => {
                return (
                    
                    <Paper  sx={{backgroundColor:"#8739F9"}}>
                        <Box sx={{width:"13em", height:"18em", padding:"0"}}>
                            <img src={'https://image.tmdb.org/t/p/original'+movie.profile_path} alt="movie details" width={"100%"} height={"100%"} />
                            <Box sx={{
                                 width:"100%"
                            }}>
                            <Typography sx={{ color:"white", textAlign:"center", marginTop:"-3em"}}>{movie.name}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                   
                )
            })
        }
         </Carousel>
    </Stack>
    
    </>
  )
    }


export default PopularMovies



