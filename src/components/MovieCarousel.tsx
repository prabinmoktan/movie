import  { useEffect, useState } from 'react'
import { moviesTrending } from '../services/axios.service';
import Carousel from 'react-material-ui-carousel';
import { movieCardInterface } from '../interface/global.interafce';
import { Paper, Typography, Box } from '@mui/material';

const MovieCarousel = () => {
    const [carousel, setCarousel] = useState([]);

    const moviesData = async () => {
        const response = await moviesTrending();
      
        setCarousel(response.results);
      };
      useEffect(() => {
        moviesData();
      }, []);
  return (
   <>
   <Box >
   <Carousel  height={"600px"} fullHeightHover={false} indicators={false}>
    {
        carousel &&
        carousel.slice(5, 10).map((data: movieCardInterface)=> {
            return (<Paper key={data.id} >
                <img src={'https://image.tmdb.org/t/p/original'+ data.poster_path} alt={data.title} height={"550px"} width={"100%"} />
                <Paper>
                <Typography variant='h5' sx={{  color:"white", marginTop:"-2em"}}>{data.title}</Typography>
                </Paper>
                
            </Paper>)
        })    }
      
           
      
           
                
        </Carousel>
        </Box>
    
   
   </>
  )
}

export default MovieCarousel