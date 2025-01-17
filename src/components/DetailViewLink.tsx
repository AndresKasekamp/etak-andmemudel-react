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
  const { t, i18n } = useTranslation();

  const extraLayers = [derivedPathMany, threeDPath];
  let linkTo = `/${i18n.language}/${group}/${table}`;
  if (extraLayers.includes(locationPathName)) {
    linkTo = `/${i18n.language}/${locationPathName}/${group}/${table}`;
  }

  return (
    <Link to={linkTo}>
      <Button
        variant="contained"
        size="medium"
        startIcon={<PageviewIcon />}
        sx={{
          backgroundColor: "appColor.landBoardMain",
          borderColor: "appColor.landBoardMain",
          "&:hover": {
            backgroundColor: "appColor.appBarColorHover", // Darker shade for hover
            borderColor: "appColor.appBarColorHover",
          },
        }}
      >
        {t("detailView")}
      </Button>
    </Link>
  );
};
