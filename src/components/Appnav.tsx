import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import { Link, Stack } from "@mui/material";

import "../assets/1.jpg";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function ButtonAppBar() {
  return (
    <>
      <Box>
        <AppBar sx={{ backgroundColor:"rgba(0, 0, 0, 0.5)", flexGrow: "1" }}>
          <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
            <IconButton size="large">
              <LiveTvIcon sx={{ color: "white" }} />
              <Typography variant="h4" color={"white"}>Movie</Typography>
            </IconButton>

            {/* <SearchBar /> */}
            
            <Stack spacing={4} direction={"row"}>
            <Link href="/trendingMovies"  underline="hover" sx={{ color: "white" }}  >
                Trending Movies
              </Link>
              <Link underline="none" sx={{ color: "white" }}>
                Top IMDB
              </Link>
              <Link underline="none" sx={{ color: "white" }}>
                TV series
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
