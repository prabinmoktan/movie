import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY

export const moviesTrending= async() =>{
  const response= await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&sort_by=release_date&sort_order=desc&api_key=${apiKey}`);
  
  return (response.data)

}
 
export const movieDetail = async(id: number) => {
  const response= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
  
  return (response.data);
}
 
export const searchedData = async(searchKey:any) => {
  let query = encodeURIComponent(searchKey)
  const response = await axios.get(`https://api.themoviedb.org/3/movie?query=${query}&api_key=${apiKey}`)
  console.log(response)
  return response
}

export const popularMovies = async() => {
  const response = await axios.get(`https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=${apiKey}`)
  return(response.data)

}

export const tvshows = async() => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/tv`,{
      headers: {
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDlkZmNjMjdhZGExMzk5OWRkZmE5N2U2ZDE3NGI2NCIsInN1YiI6IjY0N2RkYWU0MTc0OTczMDExODcyMWRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dc3VPpEkEkBIB3CRWjhBx7jrzNLFEEB_gjI4ieuwn9c'
      },
      params: {
        include_adult: 'false',
        include_null_first_air_dates: 'false',
        language: 'en-US',
        page: '1',
        sort_by: 'popularity.desc'
      },
    }
  )
  return(response.data)
  }
  catch(err){
    console.log(err)
  }
  
}

export const tvshowData = async(id:number) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/tv/${id}?`,{
      headers: {
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDlkZmNjMjdhZGExMzk5OWRkZmE5N2U2ZDE3NGI2NCIsInN1YiI6IjY0N2RkYWU0MTc0OTczMDExODcyMWRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dc3VPpEkEkBIB3CRWjhBx7jrzNLFEEB_gjI4ieuwn9c'
      }
    }
  )
  return(response)
  }
  catch(err){
    console.log(err)
  }
  
}

export const topRated = async(page: number) => {

  try{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDlkZmNjMjdhZGExMzk5OWRkZmE5N2U2ZDE3NGI2NCIsInN1YiI6IjY0N2RkYWU0MTc0OTczMDExODcyMWRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dc3VPpEkEkBIB3CRWjhBx7jrzNLFEEB_gjI4ieuwn9c'
      }
      
    })
    
    return(response.data.results)
  }
  catch(err){
    console.log(err)
  }
}




















