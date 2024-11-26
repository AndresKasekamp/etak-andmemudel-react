import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { FrontPageIndexTable } from "../components/FrontPageIndexTable.tsx";
import { generateFeatureClass } from "../data/featureClasses.tsx";
import { derivedPath } from "./groupPaths.ts";
import { TablesTogetherLink } from "../components/TablesTogetherLink.tsx";

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
            objectName={t("nameDerivatives")}
            itemNames={generateFeatureClass().tuletiskihid}
            dataTypeClass={derivedPath}
          />
        </Box>
      </Container>
    </>
  );
}

export default Derivatives;
