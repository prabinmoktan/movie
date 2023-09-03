import React from 'react'
import { movieCardInterface } from '../interface/global.interafce'
import { Card, CardMedia , CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}:movieCardInterface) => {
    const navigate = useNavigate()

    const viewDetailHandler=( id: number) => {
        
        navigate(`/trendingMovies/${id}`)
        console.log(movie.id)
    }
  return (
    <>
    <Card sx={{width:"15rem", height:"22rem", border:"none", marginTop:"2em"}} component={"button"} onClick={()=>viewDetailHandler(movie.id)} >
        <CardMedia component={"img"} image={'https://image.tmdb.org/t/p/original'+ movie.poster_path} />
        <CardContent sx={{marginTop:"-5em", height:"1em"}}>
            <Typography color={'white'}>{movie.title}</Typography>
        </CardContent>

    </Card>
    
    </>
  )
}

export default MovieCard