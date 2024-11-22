import EtakAppBar from "./navbar/AppBar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const NavBarWrapper = () => {
  return (
    <>
      <ScrollToTop />
      <EtakAppBar />
      <Outlet />
    </>
  );
};

export default NavBarWrapper;
