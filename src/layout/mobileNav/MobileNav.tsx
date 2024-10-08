import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import "./mobileNav.css";
import log from "../../assets/log.svg";
import { loginButton, navItem } from "../../constant";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { userLoggedOut } from "../../auth/redux/auth.slice";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { displayName, isLoggedIn } = useSelector((state: any) => state.auth);

  const handleMenu = () => {
    setOpen(!open);
  };
  const menuOption = (menu: any) => {
    console.log(menu);
  };
  const handleLogout = () => {
    dispatch(userLoggedOut());
    console.log('first')
  };

  return (
    <>
      <header className="header">
        <nav className="navs">
          <div className="icons">
            {open ? (
              <MdClose onClick={handleMenu} color="white" />
            ) : (
              <CiMenuBurger onClick={handleMenu} color="white" />
            )}
          </div>
          <div>
            <IconButton href="/">
              <img src={log} alt="..." width={100} height={50} />
            </IconButton>
          </div>
        </nav>
      </header>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div>
          {isLoggedIn ? 
           <List sx={{ width: "70%" }}>
           <ListItemButton onClick={() => setIsClicked(!isClicked)}>
             <ListItemText primary={`Hi,${displayName}`} />
             {isClicked ? <FaAngleUp /> : <FaAngleDown />}
           </ListItemButton>
           <Collapse
             in={isClicked}
             timeout="auto"
             unmountOnExit
             sx={{
               width: "100%",
               pl: "2rem",
               borderRadius: "5px",
             }}
           >
             {loginButton?.map((menu: any, index) => (
               <List
                 component={"div"}
                 disablePadding
                 key={index}
                 onClick={() => menuOption(menu)}
                 className="menulist"
               >
                 <ListItemButton>
                   <ListItemText primary={menu.name} />

                   {<menu.icon />}
                 </ListItemButton>
               </List>
             ))}
           </Collapse>
         </List>
         :
         <List sx={{ width: "70%" }}>
           <ListItemButton onClick={()=> navigate('/login')}>
                  <ListItemText primary='Login' />
                </ListItemButton>
         </List>
         }
         
          {navItem &&
            navItem.map((item, index) => (
              <List key={index}>
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </List>
            ))}
        </div>
       { isLoggedIn && 
       <Box sx={{ width: "70%" }}>
          <List sx={{ color: "white" }}>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Log out" />
              <MdLogout />
            </ListItemButton>
          </List>
        </Box>}
      </aside>
    </>
  );
};

export default MobileNav;
