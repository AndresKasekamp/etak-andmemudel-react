import { Button, useMediaQuery } from "@mui/material";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { TablesTogetherLinkProps } from "../../interfaces/interfaces";

export const TablesTogetherLink = ({ route }: TablesTogetherLinkProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { t } = useTranslation();

  // Common button styles
  const buttonStyles = {
    ml: 2,
    mb: 2,
    backgroundColor: "#32774E",
    borderColor: "#32774E",
    "&:hover": {
      backgroundColor: "#285f3f", // Darker shade for hover
      borderColor: "#285f3f",
    },
  };

  return (
    <Link to={route} style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        size="large"
        sx={buttonStyles}
        startIcon={!isMobile ? <ViewStreamIcon /> : undefined}
      >
        {isMobile ? <ViewStreamIcon /> : t("dataInOnePage")}
      </Button>
    </Link>
  );
};