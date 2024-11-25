import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import { TablesTogetherLinkProps } from "../interfaces/interfaces";

export const TablesTogetherLink = ({ route }: TablesTogetherLinkProps) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Link to={route}>
      <Button
        variant="contained"
        size="large"
        startIcon={<ViewStreamIcon />}
        sx={{
          ml: 2,
          mb: 2,
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
