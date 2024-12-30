import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

import { DomainTableProps2 } from "../../interfaces/interfaces";
import { useTranslation } from "react-i18next";

export default function DomainTable({ domain }: DomainTableProps2) {
  const { t } = useTranslation();

  return (
    <TableContainer
      id={domain.name}
      component={Paper}
      sx={{
        maxWidth: 400,
        m: 2,
      }}
    >
      <div style={{ alignItems: "center" }}>
        <Typography variant="h5" sx={{ marginLeft: 2 }}>
          {t("domainTable")}
        </Typography>
        <Typography variant="h4" sx={{ marginLeft: 2, marginBottom: 1 }}>
          {domain.name}
        </Typography>

        <Typography sx={{ marginLeft: 2 }}>
          {t("fieldDesc")}: {domain.desc}
        </Typography>

        <Typography sx={{ marginLeft: 2, marginBottom: 1 }}>
          {t("fieldType")}: {t("shortInteger")}
        </Typography>
      </div>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "appColor.domainTableHeadingColor",
            }}
          >
            <TableCell>{t("fieldDomainCode")}</TableCell>
            <TableCell>{t("fieldDomainNaming")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(domain.coded_values).map(([key, value]) => (
            <TableRow
              key={key}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: "appColor.domainTableFieldColor",
              }}
            >
              <TableCell align="right">{key}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
