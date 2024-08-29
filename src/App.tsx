import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import MainTable from "./components/MainTable.tsx";
import { etakJoonobjektid, etakPunktobjektid, etakPindobjektidMain, etakPindobjektidOverlap } from "./pages/featureClasses";

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
          <MainTable
            backgroundColor="#C4C1A4"
            objectName="Metaandmed"
            itemNames={["alusdokument"]}
            dataTypeClass="etak"
          />
          <MainTable
            backgroundColor="#E1ACAC"
            objectName="Punktobjektid"
            itemNames={etakPunktobjektid}
            dataTypeClass="punktobjekt"
          />
          <MainTable
            backgroundColor="#AC87C5"
            objectName="Joonobjektid"
            itemNames={etakJoonobjektid}
            dataTypeClass="joonobjekt"
          />

          <Box
            sx={{
              backgroundColor: "#80BCBD",
              padding: "1rem",
              borderRadius: "5px",
              m: 1,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Pindobjektid
            </Typography>

            <MainTable
              backgroundColor="#cfcfc4"
              objectName="Põhipindobjektid"
              itemNames={etakPindobjektidMain}
              dataTypeClass="pindobjekt"
            />
            <MainTable
              backgroundColor="#577B8D"
              objectName="Kattuvad pindobjektid"
              itemNames={etakPindobjektidOverlap}
              dataTypeClass="pindobjekt"
            />
          </Box>

          <MainTable
            backgroundColor="#A1DD70"
            objectName="Tuletiskihid"
            itemNames={["vooluveed_kkr"]}
            dataTypeClass="tuletiskiht"
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
