import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

import { SHORT_INTEGER } from "../../data/dataTypes";

import { DomainTableProps2 } from "../../interfaces/interfaces2";

export default function DomainTable({ domain }: DomainTableProps2) {
  return (
    <TableContainer
      id={domain.name}
      component={Paper}
      sx={{
        maxWidth: 400,
        minWidth: 400,
        margin: 5,
      }}
    >
      <div style={{ alignItems: "center" }}>
        <Typography variant="h5" sx={{ marginLeft: 2 }}>
          Domeen/kooditabel
        </Typography>
        <Typography variant="h4" sx={{ marginLeft: 2, marginBottom: 1 }}>
          {domain.name}
        </Typography>

        <Typography sx={{ marginLeft: 2 }}>Kirjeldus: {domain.desc}</Typography>

        <Typography sx={{ marginLeft: 2, marginBottom: 1 }}>
          Andmetüüp: {SHORT_INTEGER}
        </Typography>
      </div>
      <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#FF6961",
            }}
          >
            <TableCell>Kood</TableCell>
            <TableCell>Nimetus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(domain.coded_values).map(([key, value]) => (
            <TableRow
              key={key}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: "#fde0e0",
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
