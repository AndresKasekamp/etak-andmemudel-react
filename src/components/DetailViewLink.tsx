import PageviewIcon from "@mui/icons-material/Pageview";

import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { DetailViewLinkProps } from "../interfaces/interfaces";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const DetailViewLink = ({
  locationPathName,
  group,
  table,
}: DetailViewLinkProps) => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: string }>();

  const linkTo = `/${lng}/${locationPathName}/${group}/${table}`;

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
