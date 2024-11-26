import { Link } from "react-router-dom";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const LinkDerivatives = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Link to="/tuletiskihid" title="Tuletiskihid">
      <Button
        variant="contained"
        size="large"
        startIcon={<AltRouteIcon />}
        sx={{
          backgroundColor: "#32774E",
          borderColor: "#32774E",
          "&:hover": {
            backgroundColor: "#285f3f", // Darker shade for hover
            borderColor: "#285f3f",
          },
        }}
      >
        {isMobile ? "" : "Tuletiskihid"}
      </Button>
    </Link>
  );
};

export default LinkDerivatives;
