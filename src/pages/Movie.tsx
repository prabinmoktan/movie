
import {useState, useEffect} from 'react'
import { movie } from '../services/axios.service'
import { Grid, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { movieCardInterface } from '../interface/global.interafce'

const Movie = () => {
  const { id } = useParams();
  const [topmovie, setTopMovie] = useState<movieCardInterface>([])

  const getMovie = async(id:number)=> {
    const response = await movie(id);
    console.log(response)
    setTopMovie(response)

  }
  useEffect(()=> {
    getMovie(id);
  },[])
  return (
    <>
    <Box>
    <Grid container spacing={2}>
      <Grid item xs={6}>
     <h1>{topmovie.title}</h1>
      </Grid>
      <Grid item xs={6}>
      2
      </Grid>

    </Grid>
    </Box>
    </>
  )
}

export default Movie