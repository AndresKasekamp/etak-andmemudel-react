import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { generateFeatureClass } from "../data/featureClasses.tsx";
import {
  linePath,
  polyPath,
} from "./paths/groupPaths.ts";
import { TablesTogetherLink } from "../components/helpers/TablesTogetherLink.tsx";

import ResourcesTable from "../components/ResourcesList.tsx";
import { useTranslation } from "react-i18next";

function Derivatives() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ textAlign: "center", color: "#32774e" }}
      >
        <Typography variant="h3" gutterBottom>
          {t("nameDerivatives")}
        </Typography>
        <TablesTogetherLink route="/tuletiskihid/all" />
      </Box>

      <ResourcesTable
        data={[
          {
            objectName: t("nameLineObjects"),
            dataTypeClass: linePath,
            itemNames: generateFeatureClass().tuletiskihidLines,
          },

          {
            objectName: t("nameAllPolygonObjects"),
            dataTypeClass: polyPath,
            itemNames: generateFeatureClass().tuletiskihidPolygons,
          },
        ]}
      ></ResourcesTable>
    </>
  );
}

export default Derivatives;
