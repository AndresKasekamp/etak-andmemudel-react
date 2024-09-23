import PageviewIcon from '@mui/icons-material/Pageview';

import { Button } from "@mui/material";

import { Link } from "react-router-dom";

// TODO vaja on tabeli nimi, conditional kas tegu on all/2d või mitte

export const DetailViewLink = () => {
  return (
    <Link to="/">
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