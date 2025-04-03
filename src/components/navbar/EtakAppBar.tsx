import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useMediaQuery } from "@mui/material";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "react-i18next";
import LinkAbout from "./LinkAbout";
import LinksMenu from "./MobileView";
import { useTheme } from "@mui/material/styles";

import { CategoryLinks } from "./CategoryLinks";

import {
  derivedPathMany,
  threeDPath,
  levituumPath,
} from "../../pages/paths/groupPaths";

import HomeIcon from "@mui/icons-material/Home";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import AltRouteIcon from "@mui/icons-material/AltRoute";

import { useParams } from "react-router-dom";

export default function EtakAppBar() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { lng = "" } = useParams();

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar sx={{ backgroundColor: "appColor.landBoardMain" }}>
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

          {["et", "en"].includes(lng) ? (
            <Box
              sx={{ ml: "auto", display: "flex", gap: 1, alignItems: "center" }}
            >
              <ChangeLanguage />
              <LinkAbout />
              {isMobile ? (
                <LinksMenu></LinksMenu>
              ) : (
                <>
                  <CategoryLinks
                    path={derivedPathMany}
                    title={t("nameDerivatives")}
                    icon={<AltRouteIcon />}
                  ></CategoryLinks>
                  <CategoryLinks
                    path={threeDPath}
                    title={t("name3DLayers")}
                    icon={<ThreeDRotationIcon />}
                  ></CategoryLinks>
                  <CategoryLinks
                    path={levituumPath}
                    title={t("nameLevituum")}
                    icon={<HomeIcon />}
                  ></CategoryLinks>
                </>
              )}
            </Box>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
