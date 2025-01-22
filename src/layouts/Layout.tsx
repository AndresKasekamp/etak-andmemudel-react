import EtakAppBar from "../components/navbar/AppBar";
import { Outlet } from "react-router-dom";
import ScrollToTopOnPageChange from "../components/helpers/ScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import Container from "@mui/material/Container";
import NotFoundPage from "../pages/NotFoundPage";
import { useParams } from "react-router-dom";

const Layout = () => {
  const { lng = "" } = useParams();
  return (
    <>
      <EtakAppBar />
      {["et", "en"].includes(lng) ? (
        <>
          <Container maxWidth="xl" sx={{ height: "100vh" }}>
            <ScrollToTopOnPageChange />
            <ScrollToTop smooth color="#6f00ff" />
            <Outlet />
          </Container>
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default Layout;
