import EtakAppBar from "./navbar/AppBar";
import { Outlet } from "react-router-dom";
import ScrollToTopOnPageChange from "../components/ScrollToTop";
import ScrollToTop from "react-scroll-to-top";

const NavBarWrapper = () => {
  return (
    <>
      <ScrollToTopOnPageChange />
      <ScrollToTop smooth color="#6f00ff" />
      <EtakAppBar />
      <Outlet />
    </>
  );
};

export default NavBarWrapper;
