import EtakAppBar from "../components/navbar/EtakAppBar";
import { Outlet, useParams } from "react-router-dom";
import ScrollToTopOnPageChange from "../components/helpers/ScrollToTopOnPageChange";
import ScrollToTop from "react-scroll-to-top";
import Container from "@mui/material/Container";
import NotFoundPage from "../pages/NotFoundPage";

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
