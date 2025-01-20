import EtakAppBar from "../../components/navbar/AppBar";
import { Outlet } from "react-router-dom";
import ScrollToTopOnPageChange from "../../components/helpers/ScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import Container from "@mui/material/Container";
import NotFoundPage from "../NotFoundPage";
import { useParams } from "react-router-dom";

const MainWrapper = () => {
  const { lng = "" } = useParams();
  return (
    <>
      {(() => {
        switch (lng) {
          case "et":
            return <title>ETAK Andmemudel</title>;
          case "en":
            return <title>ETAK Data Model</title>;
          default:
            return <title>ETAK</title>;
        }
      })()}
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

export default MainWrapper;
