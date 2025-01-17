import EtakAppBar from "../../components/navbar/AppBar";
import { Outlet } from "react-router-dom";
import ScrollToTopOnPageChange from "../../components/helpers/ScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import Container from "@mui/material/Container";
import NotFoundPage from "../NotFoundPage";
import { useParams } from "react-router-dom";

const MainWrapper = () => {
  const { lng = "" } = useParams();
  console.log("lng", lng);
  return (
    <>
      {["et", "en"].includes(lng) ? (
        <>
          <EtakAppBar />
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

export default MainWrapper;
