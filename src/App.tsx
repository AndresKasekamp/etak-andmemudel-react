import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { FrontPageIndexTable } from "./components/FrontPageIndexTable.tsx";
import { generateFeatureClass } from "./data/featureClasses.tsx";
import {
  pointPath,
  polyPath,
  linePath,
  metadataPath,
} from "./pages/groupPaths.ts";
import { TablesTogetherLink } from "./components/TablesTogetherLink.tsx";
import { useTranslation } from "react-i18next";
import ResourcesTable from "./components/ResourcesTable.tsx";

function App() {
  const { t } = useTranslation();

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
            {t("overView")}
          </Typography>

          <TablesTogetherLink route="/levituum/all" />
        </Box>

        <ResourcesTable
          data={[
            {
              objectName: t("nameMetadata"),
              dataTypeClass: metadataPath,
              itemNames: generateFeatureClass().metaandmed,
            },
            {
              objectName: t("namePointObjects"),
              dataTypeClass: pointPath,
              itemNames: generateFeatureClass().punktobjektid,
            },
            {
              objectName: t("nameLineObjects"),
              dataTypeClass: linePath,
              itemNames: generateFeatureClass().joonobjektid,
            },
            {
              objectName: t("nameMainPolygonObjects"),
              dataTypeClass: polyPath,
              itemNames: generateFeatureClass().pindobjektid,
            },
            {
              objectName: t("nameOverlappingPolygonObjects"),
              dataTypeClass: polyPath,
              itemNames: generateFeatureClass().pindobjektidOverlap,
            },
          ]}
        ></ResourcesTable>

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
            objectName={t("nameMetadata")}
            itemNames={generateFeatureClass().metaandmed}
            dataTypeClass={metadataPath}
          />
          <FrontPageIndexTable
            objectName={t("namePointObjects")}
            itemNames={generateFeatureClass().punktobjektid}
            dataTypeClass={pointPath}
          />
          <FrontPageIndexTable
            objectName={t("nameLineObjects")}
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
              {t("nameAllPolygonObjects")}
            </Typography>

            <FrontPageIndexTable
              objectName={t("nameMainPolygonObjects")}
              itemNames={generateFeatureClass().pindobjektid}
              dataTypeClass={polyPath}
            />
            <FrontPageIndexTable
              objectName={t("nameOverlappingPolygonObjects")}
              itemNames={generateFeatureClass().pindobjektidOverlap}
              dataTypeClass={polyPath}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
