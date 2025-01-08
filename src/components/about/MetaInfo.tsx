import { Typography } from "@mui/material";

import packageInfo from "../../../package.json" assert { type: "json" };

import { useTranslation } from "react-i18next";

export const MetaInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="body2" component="p" color="text.secondary" mt={2}>
        <strong>{t("version")}:</strong> {packageInfo.version}
      </Typography>
      <Typography variant="body2" component="p" color="text.secondary" mt={1}>
        <strong>{t("lastUpdated")}:</strong> {__BUILD_DATE__}
      </Typography>
    </>
  );
};
