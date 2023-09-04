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


 

 
