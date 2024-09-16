import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeLink from "./HomeLink";
import Link3D from "./Link3D";

export default function EtakAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#32774e" }}>
        <Toolbar sx={{ position: "relative" }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="https://geoportaal.maaamet.ee/est/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MA logo
          </Typography>

          <HomeLink></HomeLink>
          <Link3D></Link3D>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Eesti topograafia andmekogu tuumandmete andmemudel
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
