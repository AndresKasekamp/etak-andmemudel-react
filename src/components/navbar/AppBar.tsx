import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeLink from "./HomeLink";
import Link3D from "./Link3D";
import LinkDerivatives from "./LinkDerivatives";
import { AppBarColor } from "../../data/colors";
import LastUpdated from "./LastUpdated";
import { useMediaQuery } from '@mui/material';
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "react-i18next";


export default function EtakAppBar() {

  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar sx={{ backgroundColor: AppBarColor }}>
        <Toolbar sx={{ position: "relative" }}>

        <Box sx={{ mr: "auto", display: "flex", gap: 2 }}>
        {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="https://geoportaal.maaamet.ee/est/"
            sx={{
              display: { md: "none", lg: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            Geoportaal
          </Typography> */}

          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "center"}}
          >
            {isMobile ?  t('titleShort') : t('title')}
          </Typography>
          </Box>

          <Box sx={{ ml: "auto", display: "flex", gap: 2, alignItems: 'center' }}>
            <HomeLink></HomeLink>
            <LinkDerivatives></LinkDerivatives>
            <Link3D></Link3D>
            <ChangeLanguage></ChangeLanguage>
            <LastUpdated></LastUpdated>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
