import {  Outlet, useLocation } from "react-router-dom";
import AppNav from "./layout/header/Appnav";
import Footer from "./layout/footer/Footer";

// interface LayoutProps {
//   children: ReactNode;
// }
const Layout = () => {
  const location = useLocation();
  const noNav = ["/register", "/login"];

  const showNAv = !noNav.includes(location.pathname);
  
  return (
    <>
      {showNAv && <AppNav />}
      <main>
       <Outlet/>
      </main>
      {showNAv && <Footer />}
    </>
  );
};

export default Layout;
