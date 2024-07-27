import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import "./mobileNav.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { navItem } from "../../constant";
import { Link } from "@mui/material";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
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
            <LiveTvIcon fontSize="large" />
          </div>
        </nav>
      </header>
      {/* {open && ( */}
        <aside className={`sidebar ${open ? 'open' : ''}`}>
          {navItem &&
            navItem.map((item, index) => (
              <Link href={item.link} sx={{ color: "white", mt:'1rem' }} underline="none" key={index} >
                {item.name}
              </Link>
            ))}
        </aside>
      {/* )} */}
    </>
  );
};

export default MobileNav;
