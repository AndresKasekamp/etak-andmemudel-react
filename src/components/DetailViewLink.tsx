import PageviewIcon from "@mui/icons-material/Pageview";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { DetailViewLinkProps } from "../interfaces/interfaces";

export const DetailViewLink = ({ group, table }: DetailViewLinkProps) => {
  return (
    <Link to={`/${group}/${table}`}>
      <Button
        variant="contained"
        size="medium"
        startIcon={<PageviewIcon />}
        sx={{
          backgroundColor: "#32774E",
          borderColor: "#32774E",
          "&:hover": {
            backgroundColor: "#285f3f", // Darker shade for hover
            borderColor: "#285f3f",
          },
        }}
      >
        Detailvaade
      </Button>
    </Link>
  );
};
