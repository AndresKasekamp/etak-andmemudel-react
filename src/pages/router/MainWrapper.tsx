import EtakAppBar from "../../components/navbar/AppBar";
import { Outlet } from "react-router-dom";
import ScrollToTopOnPageChange from "../../components/helpers/ScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

const MainWrapper = () => {
  return (
    <>
      <CssBaseline />
      <EtakAppBar />
      <Container maxWidth="xl" sx={{ height: "100vh" }}>
        <ScrollToTopOnPageChange />
        <ScrollToTop smooth color="#6f00ff" />
        <Outlet />
      </Container>
    </>
  );
};

export default MainWrapper;
