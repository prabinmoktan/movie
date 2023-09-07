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
   <Carousel  height={"500px"} fullHeightHover={false} >
    {
        carousel &&
        carousel.slice(5, 10).map((data: movieCardInterface)=> {
            return (<Paper key={data.id} elevation={1} sx={{  margin:"auto"}}>
                <img src={'https://image.tmdb.org/t/p/original'+ data.poster_path} alt={data.title} height={"500px"} width={"100%"} />
                <Paper sx={{width:"50%", backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:'center', zIndex:"tooltip"}}>
                <Typography variant='h4' sx={{backgroundColor:"red",  color:"white", marginTop:"-3em"}}>{data.title}</Typography>
                </Paper>
                
            </Paper>)
        })    }
      
           
                {/* <h2>{data.title}</h2> */}
           
                
        </Carousel>
        </Box>
    
   
   </>
  )
}

export default MovieCarousel