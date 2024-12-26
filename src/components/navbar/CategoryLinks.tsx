import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { CategoryLinkProps } from "../../interfaces/interfaces";

export const CategoryLinks = ({ path, title, icon }: CategoryLinkProps) => {
  return (
    <Link to={path} title={title}>
      <Button
        variant="contained"
        size="medium"
        startIcon={icon}
        sx={{
          backgroundColor: "#32774E",
          borderColor: "#32774E",
          "&:hover": {
            backgroundColor: "#285f3f", 
            borderColor: "#285f3f",
          },
        }}
      >
        {title}
      </Button>
    </Link>
  );
};
