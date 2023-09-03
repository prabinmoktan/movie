import React from 'react'
import { movieDetail } from '../services/axios.service'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography, Grid , Container} from '@mui/material'
import { movieCardInterface } from '../interface/global.interafce'

const MovieDetailPage = () => {
    const [movie, setMovie] = useState<movieCardInterface>([])
    const { id } = useParams();

    const movieData = async(id: number) => {
        const response = await movieDetail(id)
        console.log(response)
        setMovie(response);
    }
    useEffect(() => {
        movieData(id)
    },[])
  return (
    <>  
        <Container sx={{backgroundColor:'#100F10', color:"#9DB2BF"}}>
            <Typography variant='h4' sx={{ color:"#C651CD"}}>{movie.title}</Typography>
            <Container sx={{width:"80%"}}>
            <Grid sm={6} md={12} sx={{ display:"flex", justifyContent:"center", alignContent:"center"}}>
                <img src={'https://image.tmdb.org/t/p/original'+ movie.poster_path}  alt="movie picture" width={"50%"} height={"400em"} />
            </Grid>
            </Container>
            <Grid container spacing={2} marginTop={"2em"} marginLeft={"100px"}>
                <Grid xs={0} >
                <img src={'https://image.tmdb.org/t/p/original'+ movie.poster_path} alt="movie.title" width={"150px"}/>
                </Grid>
                <Grid xs={6} marginLeft={"50px"} >
                    <Typography variant='h4'>{movie.title}</Typography>
                    <Typography variant='body2'>{movie.tagline}</Typography>
                    <Typography variant='body2' fontStyle={'italic'}>{movie.overview}</Typography>
                    <Typography>Release Date: {movie.release_date}</Typography>



                </Grid>
                
            </Grid>

        </Container>
    
    </>
  )
}

export default MovieDetailPage