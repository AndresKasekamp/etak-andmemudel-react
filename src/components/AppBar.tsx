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

        <Box sx={{ mr: "auto", display: "flex", gap: 2 }}>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="https://geoportaal.maaamet.ee/est/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            Geoportaal
          </Typography>

          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "center"}}
          >
            Eesti topograafia andmekogu tuumandmete andmemudel
          </Typography>
          </Box>

          <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
            <Link3D></Link3D>
            <HomeLink></HomeLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
