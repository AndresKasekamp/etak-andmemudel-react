import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { generateFeatureClass } from "./data/featureClasses.ts";
import {
  pointPath,
  polyPath,
  linePath,
  metadataPath,
} from "./pages/paths/groupPaths.ts";
import { TablesTogetherLink } from "./components/helpers/TablesTogetherLink.tsx";
import { useTranslation } from "react-i18next";
import ResourcesTable from "./components/ResourcesList.tsx";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ textAlign: "center", color: "appColor.landBoardMain" }}
      >
        <Typography variant="h3" gutterBottom>
          {t("overView")}
        </Typography>

        <TablesTogetherLink route="all" />
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
    </>
  );
}

export default App;
