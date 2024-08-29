import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { EtakTableProps2 } from "../types/interfaces.tsx";


const EtakTable = ({ updatedRows, imageSrc, tableName }: EtakTableProps2) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "xl", // Set a specific max-width
        margin: "auto", // Center the table
        marginTop: 2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={imageSrc} alt="Multipoint" width={50} height={50} />
        <Typography variant="h4" sx={{ marginLeft: 2 }}>
          {tableName}
        </Typography>
      </div>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <caption>ETAK käesolevate *andmete* lühiselgitus lorem ipsum</caption>

        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#C7C8CC",
            }}
          >
            <TableCell>Välja nimi</TableCell>
            <TableCell>Andmetüüp</TableCell>
            <TableCell>Domeen</TableCell>
            <TableCell>Kirjeldus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatedRows.map((row) => (
            <TableRow
              key={row.name.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: row.name.color,
              }}
            >
              <TableCell component="th" scope="row">
                {row.name.name}
              </TableCell>
              <TableCell>{row.dataType}</TableCell>
              <TableCell>{row.domain}</TableCell>
              <TableCell>{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EtakTable;
