import  { useState, useEffect } from "react";
import { tvshows } from "../services/axios.service";
import {
  Box,
  CardMedia,
  Typography,
  Stack 
  
} from "@mui/material";
import { tvshowsInterface } from "../interface/global.interafce";
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
        direction={"row"}
        sx={{
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          backgroundColor: "#100F10",
        }}
      >
        {shows &&
          shows.map((show: tvshowsInterface) => {
            return (
              // <Stack direction={'row'} >
              <Box key={show.id} width={"15em"} height={"24em"}>
                <CardMedia
                  component={"img"}
                  image={
                    "https://image.tmdb.org/t/p/original" + show.poster_path
                  }
                  height={"300px"}
                />
                <Typography
                  sx={{
                    marginTop: "-3em",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {show.name}
                </Typography>
                {/* <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "cornflowerblue" }}
                  onClick={(e:any)=>viewHandler(show.id)}
                >
                  viewDetails
                </Button> */}
              </Box>

              // </Stack>
            );
          })}
      </Stack>
    </>
  );
};

export default Tvshows;
