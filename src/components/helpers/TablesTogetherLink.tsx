import { Button, useMediaQuery } from "@mui/material";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { TablesTogetherLinkProps } from "../../interfaces/interfaces";

export const TablesTogetherLink = ({ route }: TablesTogetherLinkProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { t, i18n } = useTranslation();

  const langRoute = `/${i18n.language}${route}`
  // Common button styles
  const buttonStyles = {
    ml: 2,
    mb: 2,
    backgroundColor: "appColor.landBoardMain",
    borderColor: "appColor.landBoardMain",
    "&:hover": {
      backgroundColor: "appColor.appBarColorHover",
      borderColor: "appColor.appBarColorHover",
    },
  };

  return (
    <Link to={langRoute} style={{ textDecoration: "none" }}>
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
