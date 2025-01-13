import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

const CopyUrlButton = (pathNameEnd: string): JSX.Element | null => {
  // Full data page the sharing is not shown
  if (pathNameEnd === "all") {
    return null;
  }

  const { t } = useTranslation();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };
  return (
    <Tooltip title={t("copyToClipboardLong")} placement="bottom">
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShareIcon />}
        onClick={copyToClipboard}
        sx={{ marginLeft: 1, marginRight: 1 }}
      >
        {t("copyToClipboardShort")}
      </Button>
    </Tooltip>
  );
};

export default CopyUrlButton;
