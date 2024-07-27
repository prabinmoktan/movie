import  { useState, useEffect } from "react";
import { tvshows } from "../services/axios.service";
import {
  
  Stack, 
  Grid
  
} from "@mui/material";
import { tvshowsInterface } from "../interface/global.interafce";
import MovieCard from "../components/MovieCard";
// import { useNavigate } from "react-router-dom";

const Tvshows = () => {
  const [shows, setShows] = useState([]);


  const getData = async () => {
    const response = await tvshows();

    setShows(response.results);
  };
  useEffect(() => {
    getData();
  }, []);
//  const viewHandler=(id: number) => {
//     navigate(`/tvshows/${id}`);
// console.log(id)
//  }

  return (
    <>
      <Stack
        width={'100%'}
        sx={{background:'#100F10'}}
       
      >
        <Grid container  sx={{
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          backgroundColor: "#100F10",
          maxWidth:'1280px',
          margin:'auto',
          gap:"2rem"
        }}
        >

        {shows &&
          shows.map((show: tvshowsInterface) => {
            return (
              <MovieCard movie={show} key={show.id}/>
              
            );
          })}
          </Grid>
      </Stack>
    </>
  );
};

export default Tvshows;
