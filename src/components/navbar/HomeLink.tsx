import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomeLink = () => {
  const { t } = useTranslation();

  return (
    <Link to="/" title={t("nameLevituum")}>
      <Button
        variant="contained"
        size="medium"
        startIcon={<HomeIcon />}
        sx={{
          backgroundColor: "#32774E",
          borderColor: "#32774E",
          "&:hover": {
            backgroundColor: "#285f3f", // Darker shade for hover
            borderColor: "#285f3f",
          },
        }}
      >
        {t("nameLevituum")}
      </Button>
    </Link>
  );
};

export default HomeLink;
