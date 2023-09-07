import React, { useEffect, useState } from 'react'
import { topRated } from '../services/axios.service'
import { movieCardInterface } from '../interface/global.interafce'
// import Cards from '../components/Cards'

import { Stack } from '@mui/material'
import Loader from '../components/Loader'
import MovieCard from '../components/MovieCard'


const TopMovies = () => {
    const [topMovies, setTopMovies] = useState([])
    const [loading , setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const getTopMovies = async() => {
        const response = await topRated(page);
        // setTopMovies(response)
        setTopMovies((prev) => [ ...prev, ...response])
     setLoading(true)
    }

    useEffect(()=> {
        getTopMovies();
    },[page])

    const scrollHandle= () => {
        // console.log("innerheight",window.innerHeight)
        // console.log("scrollTop", document.documentElement.scrollTop)
        // console.log("scrollHeight", document.documentElement.scrollHeight)
        if(window.innerHeight+ document.documentElement.scrollTop  >= 
            document.documentElement.scrollHeight){
                    setPage((prev)=> prev + 1)
                    setLoading(true)
            }
    }

    useEffect(() => {
       window.addEventListener("scroll", scrollHandle)
    //    return() => window.removeEventListener("scroll", scrollHandle)
    },[])
  return (
    <>
    
    <Stack direction={'row'} sx={{flexWrap:"wrap" , justifyContent:"space-around"}}>
    {
        topMovies && 
        topMovies?.map((topMovie: movieCardInterface, id) => {
                return(
                    <React.Fragment key={id}>
                    <MovieCard  movie={topMovie}/>
                    </React.Fragment>
                )
        })
    }
   
    </Stack>
    {loading ?<Loader/>: null}
    </>
  )
}

export default TopMovies