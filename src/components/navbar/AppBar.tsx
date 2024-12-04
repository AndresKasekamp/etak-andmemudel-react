import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeLink from "./HomeLink";
import Link3D from "./Link3D";
import LinkDerivatives from "./LinkDerivatives";
import { AppBarColor } from "../../data/colors";
import { useMediaQuery } from "@mui/material";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "react-i18next";
import LinkAbout from "./LinkAbout";
import BasicMenu from "./MobileView";
import { useTheme } from '@mui/material/styles';

export default function EtakAppBar() {
  const { t } = useTranslation();
  // const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar sx={{ backgroundColor: AppBarColor }}>
        <Toolbar sx={{ position: "relative" }}>
          <Box sx={{ mr: "auto", display: "flex", gap: 2 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {isMobile ? t("titleShort") : t("title")}
            </Typography>
          </Box>

          <Box
            sx={{ ml: "auto", display: "flex", gap: 1, alignItems: "center" }}
          >
            <ChangeLanguage></ChangeLanguage>
            <LinkAbout></LinkAbout>
            {isMobile ? (
              <BasicMenu></BasicMenu>
            ) : (
              <>
                <LinkDerivatives></LinkDerivatives>
                <Link3D></Link3D>
                <HomeLink></HomeLink>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
