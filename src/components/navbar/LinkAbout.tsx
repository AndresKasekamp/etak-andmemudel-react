import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

import { aboutPath } from "../../pages/paths/groupPaths";

export default function LinkAbout() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to={aboutPath} title={t("nameAboutPage")}>
        <Button>
          <InfoIcon
            fontSize="large"
            sx={{ color: "appColor.mainCategory" }}
          ></InfoIcon>
        </Button>
      </Link>
    </div>
  );
}
