import { Box, Typography } from "@mui/material";
import Legend from "../components/about/CategoryLegend";

import DataSourceCount from "../components/about/DataSouceCount";
import { UsefulLinks } from "../components/about/UsefulLinks";
import { ContactInfo } from "../components/about/ContactInfo";
import { MetaInfo } from "../components/about/MetaInfo";

import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  // Project metadata

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          color: "appColor.aboutPageText",
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex", // Flexbox layout
          flexDirection: "column", // Stack children vertically
          alignItems: "center", // Center children horizontally
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t("aboutPageTitle")}
        </Typography>
        <Typography variant="body1" component="p">
          {t("aboutPageText")}
        </Typography>

        <DataSourceCount></DataSourceCount>

        <Legend></Legend>

        <UsefulLinks></UsefulLinks>

        <ContactInfo></ContactInfo>

        <MetaInfo></MetaInfo>
      </Box>
    </>
  );
};

export default AboutPage;
