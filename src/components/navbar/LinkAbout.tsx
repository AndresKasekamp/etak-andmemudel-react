import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

export default function LinkAbout() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/about" title={t("nameAboutPage")}>
        <Button>
          <InfoIcon fontSize="large" sx={{ color: "white" }}></InfoIcon>
        </Button>
      </Link>
    </div>
  );
}
