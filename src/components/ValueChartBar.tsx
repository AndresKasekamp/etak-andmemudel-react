import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

import { ValueChartBarProps } from "../interfaces/interfaces";
import { useTranslation } from "react-i18next";

export default function ValueChartBar({
  open,

  handleClose,
  row,
}: ValueChartBarProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{row.name}</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0.5,
        }}
      >
        <BarChart
          xAxis={[{ scaleType: "band", data: Object.keys(row.chart_values) }]}
          series={[{ data: Object.values(row.chart_values) }]}
          width={500}
          height={300}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {t("closeButton")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
