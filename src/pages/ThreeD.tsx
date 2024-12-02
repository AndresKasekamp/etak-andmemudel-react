import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { generateFeatureClass } from "../data/featureClasses.tsx";
import { threeDPath } from "./groupPaths.ts";
import { TablesTogetherLink } from "../components/TablesTogetherLink.tsx";
import { useTranslation } from "react-i18next";

import ResourcesTable from "../components/ResourcesTable.tsx";

function ThreeD() {
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
            {t("name3DLayers")}
          </Typography>

          <TablesTogetherLink route="/3d/all" />
        </Box>

        <ResourcesTable
          data={[
            {
              objectName: t("name3DLayers"),
              dataTypeClass: threeDPath,
              itemNames: generateFeatureClass().threeD,
            }
          ]}
        ></ResourcesTable>


      </Container>
    </>
  );
}

export default ThreeD;
