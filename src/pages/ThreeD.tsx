import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { generateFeatureClass } from "../data/featureClasses.ts";
import { lod0Path, lod1Path, lod2Path } from "./paths/groupPaths.ts";
import { TablesTogetherLink } from "../components/helpers/TablesTogetherLink.tsx";
import { useTranslation } from "react-i18next";

import ResourcesTable from "../components/ResourcesList.tsx";

function ThreeD() {
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
          {t("name3DLayers")}
        </Typography>

        <TablesTogetherLink route="/3d/all" />
      </Box>

      <ResourcesTable
        data={[
          {
            objectName: "LoD2",
            dataTypeClass: lod2Path,
            itemNames: generateFeatureClass().lod2,
          },
          {
            objectName: "LoD1",
            dataTypeClass: lod1Path,
            itemNames: generateFeatureClass().lod1,
          },
          {
            objectName: "LoD0",
            dataTypeClass: lod0Path,
            itemNames: generateFeatureClass().lod0,
          },
        ]}
      ></ResourcesTable>
    </>
  );
}

export default ThreeD;
