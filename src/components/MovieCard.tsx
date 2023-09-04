import { movieCardInterface } from '../interface/global.interafce'
import {  CardMedia , CardContent, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}:movieCardInterface) => {
    const navigate = useNavigate()

    const viewDetailHandler=( id: number) => {
        
        navigate(`/trendingMovies/${id}`)
        console.log(movie.id)
    }
  return (
    <>
    <Box sx={{width:"15rem", height:"22rem", border:"none", marginTop:"2em", padding:"0"}} component={"button"} onClick={()=>viewDetailHandler(movie.id)} >
        <CardMedia component={"img"} image={'https://image.tmdb.org/t/p/original'+ movie.poster_path} sx={{marginTop:"-1em"}}/>
        <CardContent sx={{marginTop:"-5em", height:"1em"}}>
            <Typography color={'white'}>{movie.title}</Typography>
        </CardContent>

    </Box>
    
    </>
  )
}

export default MovieCard