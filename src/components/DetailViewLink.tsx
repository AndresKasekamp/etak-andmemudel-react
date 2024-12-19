import PageviewIcon from "@mui/icons-material/Pageview";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { DetailViewLinkProps } from "../interfaces/interfaces";
import { useTranslation } from "react-i18next";
import { derivedPathMany, threeDPath } from "../pages/paths/groupPaths";

export const DetailViewLink = ({
  locationPathName,
  group,
  table,
}: DetailViewLinkProps) => {
  const { t } = useTranslation();

  const extraLayers = [derivedPathMany, threeDPath];
  let linkTo = `/${group}/${table}`;
  if (extraLayers.includes(locationPathName)) {
    linkTo = `/${locationPathName}/${group}/${table}`;
  }

  return (
    <Link to={linkTo}>
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
        {t("detailView")}
      </Button>
    </Link>
  );
};
