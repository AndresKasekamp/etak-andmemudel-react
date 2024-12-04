import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { generateFeatureClass } from "../data/featureClasses.tsx";
import { derivedPath } from "./groupPaths.ts";
import { TablesTogetherLink } from "../components/TablesTogetherLink.tsx";

import ResourcesTable from "../components/ResourcesList.tsx";
import { useTranslation } from "react-i18next";

function Derivatives() {
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
            {t("nameDerivatives")}
          </Typography>
          <TablesTogetherLink route="/tuletiskihid/all" />
        </Box>

        <ResourcesTable
          data={[
            {
              objectName: t("nameDerivatives"),
              dataTypeClass: derivedPath,
              itemNames: generateFeatureClass().tuletiskihid,
            },
          ]}
        ></ResourcesTable>
      </Container>
    </>
  );
}

export default Derivatives;
