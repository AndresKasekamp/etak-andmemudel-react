import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";

export const TablesTogetherLink = () => {
  return (
    <Link to="/all/2d">
      <Button
        variant="contained"
        size="large"
        endIcon={<MenuBookIcon />}
        sx={{ backgroundColor: "#32774E", borderColor: "#32774E" }}
      >
        Andmed Ühel lehel
      </Button>
    </Link>
  );
};
