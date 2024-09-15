import { Box, Grid } from "@mui/material";
import Trending from "../components/trendingMovies/Trending";
import TitleTypography from "../ui/TitleTypography";

const TrendingMovies = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#100F10",
          color: "#9DB2BF",
        }}
      >
        <Grid container sx={{ maxWidth: "1280px", margin: "auto", py:'2rem',pt:'4rem' }}>
          <Box width={"100%"}>
            <TitleTypography title="Trending Movies" />
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
