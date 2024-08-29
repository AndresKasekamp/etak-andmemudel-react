import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeLink from "./HomeLink";

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

          <Typography
            variant="h4"
            component="div"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Eesti topograafia andmekogu tuumandmete andmemudel
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
