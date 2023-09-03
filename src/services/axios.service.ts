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