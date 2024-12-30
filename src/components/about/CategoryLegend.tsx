import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

export const Legend = () => {
  const { t } = useTranslation();

  // Example data for the legend
  const legendItems = [
    { color: "appColor.mainCategory", label: t("mainAttributes") },
    { color: "appColor.esriCategory", label: t("esriAttributes") },
    { color: "appColor.etakMetaCategory", label: t("etakMetaAttributes") },
    { color: "appColor.registerCategory", label: t("registerAttributes") },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        {t("attributeExplanation")}
      </Typography>
      {legendItems.map((item, index) => (
        <Box
          key={index}
          sx={{ ml: 2, display: "flex", alignItems: "center", gap: 1 }}
        >
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
