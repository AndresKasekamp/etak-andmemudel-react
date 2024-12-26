import { Box, Typography } from "@mui/material";

import {
  MainCategory,
  EsriCategory,
  EtakMetaCategory,
  RegisterCategory,
} from "../../data/colors";

import { useTranslation } from "react-i18next";

export const Legend = () => {
  const { t } = useTranslation();

  // Example data for the legend
  const legendItems = [
    { color: MainCategory, label: t("mainAttributes") },
    { color: EsriCategory, label: t("esriAttributes") },
    { color: EtakMetaCategory, label: t("etakMetaAttributes") },
    { color: RegisterCategory, label: t("registerAttributes") },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginBottom: 1, textAlign: "left" }}
      >
        {t("attributeExplanation")}
      </Typography>
      {legendItems.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Color box */}
          <Box
            sx={{
              width: 20,
              height: 20,
              backgroundColor: item.color,
              border: "1px solid #000",
            }}
          />
          {/* Text description */}
          <Typography variant="body2">- {item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Legend;
