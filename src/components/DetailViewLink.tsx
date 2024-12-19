import PageviewIcon from "@mui/icons-material/Pageview";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { DetailViewLinkProps } from "../interfaces/interfaces";
import { useTranslation } from "react-i18next";

// TODO siin on vaja fixida natuke gruppidega

export const DetailViewLink = ({
  locationPathName,
  group,
  table,
}: DetailViewLinkProps) => {
  const { t } = useTranslation();

  let linkTo = `/${group}/${table}`;
  if (locationPathName === "/tuletiskihid/all") {
    linkTo = `/tuletiskihid/${group}/${table}`;
  } else if (locationPathName === "/3d/all") {
    linkTo = `/3d/${group}/${table}`;
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
