import { useEffect, useState } from "react";
import { moviesTrending } from "../services/axios.service";
// import { movieCardInterface } from "../interface/global.interafce";
import "../App.css";
import { movieCardInterface } from "../interface/global.interafce";
import Carousel from "react-material-ui-carousel";
import { Typography } from "@mui/material";
// import Carousel from "react-material-ui-carousel";

const MovieCarousel = () => {
  const [carousel, setCarousel] = useState([]);
 

  const moviesData = async () => {
    const response = await moviesTrending();
    setCarousel(response.results);
  };
  useEffect(() => {
    moviesData();
  }, []);
  return (
    <>
      <Carousel
        sx={{ border: "3px solid red" }}
        height={"100vh"}
        fullHeightHover={false}
        indicators={false}
      >
        {carousel &&
          carousel.slice(5, 10).map((data: movieCardInterface) => {
            return (
              <div key={data.id} className="gradient" style={{ height:'100%'}} >
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + data.backdrop_path
                  }
                  alt={data.title}
                  height={"100%"}
                  width={"100%"}
                  style={{objectFit:'contain', border:'2px solid red'}}
                />
                
                  <Typography
                    variant="h5"
                    color={'white'}
                    
                  >
                    {data.title}
                  </Typography>
              
              </div>
            );
          })}
      </Carousel>
     
     
    </>
  );
};

export default MovieCarousel;
