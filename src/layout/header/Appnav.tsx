import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import {
  Collapse,
  Link,
  List,
  ListItemButton,
  // ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

import { useMediaQuery } from "react-responsive";
// import LiveTvIcon from "@mui/icons-material/LiveTv";
import log from "../../assets/log.svg";
import MobileNav from "../mobileNav/MobileNav";
import { loginButton, navItem } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../auth/redux/auth.slice";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function AppNav() {
  const mobileView = useMediaQuery({ maxWidth: 600 });
  const { isLoggedIn, displayName } = useSelector((state: any) => state.auth);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const handleMenu = async(menu: { name: string }) => {
    if (menu.name === "Logout") {
      try {
        dispatch(userLoggedOut());
        await signOut(auth);
        
      } catch (error) {
        console.log("Sign out error:", error);
      }
    }
  };

  return (
    <>
      {mobileView ? (
        <MobileNav />
      ) : (
        <Box>
          <AppBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flexGrow: "1" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton href="/">
                <img src={log} alt="..." width={150} />
              </IconButton>

              <Stack spacing={4} direction={"row"} alignItems={"center"}>
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
                {isLoggedIn ? (
                  <List sx={{ position: "relative" }}>
                    <ListItemButton onClick={() => setIsClicked(!isClicked)}>
                      <ListItemText primary={`Hi,${displayName}`} />
                      {isClicked ? <FaAngleUp /> : <FaAngleDown />}
                    </ListItemButton>
                    <Collapse
                      in={isClicked}
                      timeout="auto"
                      unmountOnExit
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        position: "absolute",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                    >
                      {loginButton?.map((menu: any, index) => (
                        <List
                          component={"div"}
                          disablePadding
                          key={index}
                          onClick={() => handleMenu(menu)}
                        >
                          <ListItemButton>
                            <ListItemText primary={menu.name} />

                            {<menu.icon />}
                          </ListItemButton>
                        </List>
                      ))}
                    </Collapse>
                  </List>
                ) : (
                  <Link href="/login" underline="hover" sx={{ color: "white" }}>
                    Login
                  </Link>
                )}
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
}
