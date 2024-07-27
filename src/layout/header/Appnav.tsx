import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import { Link, Stack } from "@mui/material";

import { useMediaQuery } from "react-responsive";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MobileNav from "../mobileNav/MobileNav";
import { navItem } from "../../constant";

export default function ButtonAppBar() {
  const mobileView = useMediaQuery({ maxWidth: 600 });

  return (
    <>
      {mobileView ? (
        <MobileNav />
      ) : (
        <Box>
          <AppBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flexGrow: "1" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton size="large" href="/">
                <LiveTvIcon sx={{ color: "white" }} />
                <Typography variant="h4" color={"white"}>
                  Movie
                </Typography>
              </IconButton>

              <Stack spacing={4} direction={"row"}>
                {navItem &&
                  navItem.map((item, index) => (
                    <Link
                      href={item.link}
                      underline="hover"
                      sx={{ color: "white" }}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  ))}
               
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
}
