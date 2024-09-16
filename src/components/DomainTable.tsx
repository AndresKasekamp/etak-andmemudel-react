import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
import { DomainTableProps } from "../types/interfaces";

export default function DomainTable({ domain }: DomainTableProps) {
  return (
    <TableContainer
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
          Andmetüüp: {domain.dataType}
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
          {domain.elements.map((row) => (
            <TableRow
              key={row.kood}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: "#fde0e0",
              }}
            >
              <TableCell align="right">{row.kood}</TableCell>
              <TableCell>{row.nimetus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
