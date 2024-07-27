
import { Typography,  Box, Grid } from "@mui/material";
import Trending from "../components/trendingMovies/Trending";

const TrendingMovies = () => {
 
  
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#100F10",
          color: "#9DB2BF",
          
        }}
      >
        <Grid container sx={{ maxWidth: "1280px", margin: "auto" }}>
          <Box width={"100%"}>
            <Typography variant="h2" textAlign={"center"}>
              Trending Movies
            </Typography>
          </Box>
         <div>
          <Trending />
         </div>
        </Grid>
      </Box>
    </>
  );
};

export default TrendingMovies;
