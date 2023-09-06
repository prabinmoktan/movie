import { useEffect, useState } from 'react'
import { topRated } from '../services/axios.service'
import { movieCardInterface } from '../interface/global.interafce'
import MovieCard from '../components/MovieCard'
import { Stack } from '@mui/material'


const TopMovies = () => {
    const [topMovies, setTopMovies] = useState([])
    const [page, setPage] = useState(1)

    const getTopMovies = async() => {
        const response = await topRated(page);
        // setTopMovies(response)
        setTopMovies((prev) => [ ...prev, ...response])
        console.log(response)
    }

    useEffect(()=> {
        getTopMovies();
    },[page])

    const scrollHandle= () => {
        if(window.innerHeight+ document.documentElement.scrollTop + 10 >= 
            document.documentElement.scrollHeight){
                    setPage((prev)=> prev + 1)
            }
    }

    useEffect(() => {
       window.addEventListener("scroll", scrollHandle)
       return() => window.removeEventListener("scroll", scrollHandle)
    },[])
  return (
    <>
    <Stack direction={'row'} sx={{flexWrap:"wrap" , justifyContent:"space-around"}}>
    {
        topMovies && 
        topMovies?.map((topMovie: movieCardInterface) => {
                return(
                    <MovieCard key={topMovie.id} movie={topMovie}/>
                )
        })
    }
    </Stack>
    </>
  )
}

export default TopMovies