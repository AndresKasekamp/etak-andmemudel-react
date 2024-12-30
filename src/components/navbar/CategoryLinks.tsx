import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { CategoryLinkProps } from "../../interfaces/interfaces";

export const CategoryLinks = ({ path, title, icon }: CategoryLinkProps) => {
  return (
    <Link to={path} title={title}>
      <Button
        variant="text"
        size="medium"
        startIcon={icon}
        sx={{
          backgroundColor: "appColor.landBoardMain",
          borderColor: "appColor.landBoardMain",
          color: "appColor.mainCategory",
          "&:hover": {
            backgroundColor: "appColor.appBarColorHover",
            borderColor: "appColor.appBarColorHover",
          },
        }}
      >
        {title}
      </Button>
    </Link>
  );
};
