import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import etak_kirjeldus from './data/etak_kirjeldus.json' assert { type: 'json' };

import {FrontPageIndexTable} from "./components/FrontPageIndexTable.tsx";
import {
  etakPunktobjektid,
  // etakJoonobjektid,
  // etakPindobjektidMain,
  // etakPindobjektidOverlap,
  metadata,
  // derivedLayers,
} from "./data/featureClasses.tsx";

function App() {
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "100vh", mt: 2 }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="top"
          alignItems="center"
          sx={{ textAlign: "center", color: "#32774e" }}
        >
          <Typography variant="h3" gutterBottom>
            Üldvaade
          </Typography>
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
            backgroundColor="#C4C1A4"
            objectName={etak_kirjeldus.groups.meta.name.et}
            itemNames={metadata}
            // itemNames={etakPunktobjektid}
            dataTypeClass="etak"
          />
          <FrontPageIndexTable
            backgroundColor="#E1ACAC"
            objectName={etak_kirjeldus.groups.points.name.et}
            itemNames={etakPunktobjektid}
            dataTypeClass="punktobjekt"
          />
          <FrontPageIndexTable
            backgroundColor="#AC87C5"
            objectName={etak_kirjeldus.groups.lines.name.et}
            // itemNames={etakJoonobjektid}
            itemNames={etakPunktobjektid}
            dataTypeClass="joonobjekt"
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
              {etak_kirjeldus.groups.polygons.name.et}
            </Typography>

            <FrontPageIndexTable
              backgroundColor="#cfcfc4"
              objectName={etak_kirjeldus.groups.land_cover.name.et}
              // itemNames={etakPindobjektidMain}
              itemNames={etakPunktobjektid}
              dataTypeClass="pindobjekt"
            />
            <FrontPageIndexTable
              backgroundColor="#577B8D"
              objectName={etak_kirjeldus.groups.overlapping.name.et}
              // itemNames={etakPindobjektidOverlap}
              itemNames={etakPunktobjektid}
              dataTypeClass="pindobjekt"
            />
          </Box>

          <FrontPageIndexTable
            backgroundColor="#A1DD70"
            objectName={etak_kirjeldus.groups.derivatives.name.et}
            // itemNames={derivedLayers}
            itemNames={etakPunktobjektid}
            dataTypeClass="tuletiskiht"
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
