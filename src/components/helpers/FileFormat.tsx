import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

import { FileFormatProps } from "../../interfaces/interfaces";

import { useTranslation } from "react-i18next";

export const FileFormat = ({ format }: FileFormatProps) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t(format)} placement="bottom">
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "inherit", // No darkening effect on hover
          },
        }}
      >
        {format}
      </Button>
    </Tooltip>
  );
};
