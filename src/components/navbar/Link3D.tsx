import { Link } from "react-router-dom";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const Link3D = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Link to="/3d" title="3D kihid">
      <Button
        variant="contained"
        size="large"
        startIcon={<ThreeDRotationIcon />}
        sx={{
          backgroundColor: "#32774E",
          borderColor: "#32774E",
          "&:hover": {
            backgroundColor: "#285f3f", // Darker shade for hover
            borderColor: "#285f3f",
          },
        }}
      >
        {isMobile ? "" : "3D kihid"}
      </Button>
    </Link>
  );
};

export default Link3D;
