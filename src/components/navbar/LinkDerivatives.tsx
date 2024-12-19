import { Link } from "react-router-dom";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import { Button } from "@mui/material";

import { useTranslation } from "react-i18next";

import { derivedPathMany } from "../../pages/paths/groupPaths";

const LinkDerivatives = () => {
  const { t } = useTranslation();

  return (
    <Link to={derivedPathMany} title={t("nameDerivatives")}>
      <Button
        variant="contained"
        size="medium"
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
        {t("nameDerivatives")}
      </Button>
    </Link>
  );
};

export default LinkDerivatives;
