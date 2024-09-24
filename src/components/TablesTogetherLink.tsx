import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const TablesTogetherLink = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Link to="/all/2d">
      <Button
        variant="contained"
        size="large"
        startIcon={<ViewStreamIcon />}
        sx={{
          backgroundColor: "#32774E",
          borderColor: "#32774E",
          "&:hover": {
            backgroundColor: "#285f3f", // Darker shade for hover
            borderColor: "#285f3f",
          },
        }}
      >
        {isMobile ? "" : "Andmed Ühel lehel"}
      </Button>
    </Link>
  );
};
