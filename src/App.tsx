import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import etak_kirjeldus from "./data/etak_kirjeldus.json" assert { type: "json" };

import { FrontPageIndexTable } from "./components/FrontPageIndexTable.tsx";
import {
  etakPunktobjektid,
  etakJoonobjektid,
  etakPindobjektidMain,
  etakPindobjektidOverlap,
  metadata,
  derivedLayers,
  generateFeatureClass
} from "./data/featureClasses.tsx";
import {
  pointPath,
  polyPath,
  linePath,
  metadataPath,
  derivedPath,
} from "./pages/groupPaths.ts";
import { TablesTogetherLink } from "./components/TablesTogetherLink.tsx";

// TODO uut lehte avades peaks olema automaatselt üles skrollitud

function App() {
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "100vh", mt: 2 }}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ textAlign: "center", color: "#32774e" }}
        >
          <Typography variant="h3" gutterBottom>
            Üldvaade
          </Typography>

          <TablesTogetherLink />
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          sx={{
            textAlign: "center",
            marginTop: "1rem",
            flexWrap: "wrap",
            flexDirection: "column",
            "@media (min-width: 600px)": {
              flexDirection: "row",
            },
          }}
        >
          <FrontPageIndexTable
            objectName="Metaandmed"
            itemNames={metadata}
            dataTypeClass={metadataPath}
          />
          <FrontPageIndexTable
            objectName="Punktobjektid"
            itemNames={generateFeatureClass().punktobjektid}
            dataTypeClass={pointPath}
          />
          <FrontPageIndexTable
            objectName="Joonobjektid"
            itemNames={generateFeatureClass().joonobjektid}
            dataTypeClass={linePath}
          />

          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "1rem",
              borderRadius: "5px",
              border: "1px solid #4F4F4F", // Dark grey border
              m: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#797C7F",
              }}
              gutterBottom
            >
              Pindobjektid
            </Typography>

            <FrontPageIndexTable
              objectName="Põhipindobjektid"
              itemNames={generateFeatureClass().pindobjektid}
              dataTypeClass={polyPath}
            />
            <FrontPageIndexTable
              objectName="Kattuvad pindobjektid"
              itemNames={generateFeatureClass().pindobjektidOverlap}
              dataTypeClass={polyPath}
            />
          </Box>

          <FrontPageIndexTable
            objectName="Tuletiskihid"
            itemNames={derivedLayers}
            dataTypeClass={derivedPath}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
