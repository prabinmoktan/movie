import { moviesTrending } from "../services/axios.service";
import { useState, useEffect } from "react";
import { Typography, Stack , Box } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { movieCardInterface } from "../interface/global.interafce";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([])

  const moviesData = async () => {
    const response = await moviesTrending();
    
    setTrendingMovies(response.results);
  };
  useEffect(() => {
    moviesData();
  }, []);

//   const scrollHandle = () => {
//     try{
//  if(window.innerHeight+ document.documentElement.scrollTop >= document. documentElement.scrollHeight)    }
//     catch(err){
//       console.log(err)
//     }
//     }
//   }

  // useEffect(()=> {
  //   window.addEventListener('scroll', scrollHandle);
  // },[])


  return (
    <>
    <Box  sx={{backgroundColor:"#100F10",  color: "#9DB2BF", paddingBottom:"10px"}}>

   
      
        <Box>
        <Typography variant="h2" textAlign={"center"}>Trending Movies</Typography>
        </Box>
        <Stack flexDirection={"row"} sx={{flexWrap:"wrap", justifyContent:"space-between", marginBottom:"3em"}} >
        {
            trendingMovies && 
            
              
                trendingMovies?.map((movie :movieCardInterface) => {
                  return(
                    <MovieCard key={movie.id} movie={movie}/>
                  )
                })
                
              
            
            
        }
        </Stack>
        </Box>
        
      
    </>
  );
};

export default TrendingMovies;



