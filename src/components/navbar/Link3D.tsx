import { Link } from "react-router-dom";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Link3D = () => {

  const { t } = useTranslation();

  return (
    <Link to="/3d" title={t("name3DLayers")}>
      <Button
        variant="contained"
        size="medium"
        startIcon={<ThreeDRotationIcon />}
        sx={{
          backgroundColor: "#32774E",
          borderColor: "#32774E",
          "&:hover": {
            backgroundColor: "#285f3f", // Darker shade for hover
            borderColor: "#285f3f",
          },
        }}
      >
        {t("name3DLayers")}
      </Button>
    </Link>
  );
};

export default Link3D;
