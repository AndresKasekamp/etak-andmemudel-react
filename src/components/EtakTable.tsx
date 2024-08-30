import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { jsPDF } from "jspdf"; //or use your library of choice here
import autoTable from "jspdf-autotable";

import { EtakTableProps2 } from "../types/interfaces.tsx";

const EtakTable = ({ updatedRows, imageSrc, tableName }: EtakTableProps2) => {
  const handleExportPDF = () => {
    const doc = new jsPDF();

    // Add the title or any other header elements
    doc.setFontSize(18);
    doc.text(tableName, 14, 22);

    // AutoTable function to generate the table
    autoTable(doc, {
      head: [["Välja nimi", "Andmetüüp", "Domeen", "Kirjeldus"]],
      body: updatedRows.map((row) => [
        row.name.name,
        row.dataType,
        row.domain,
        row.desc,
      ]),
      startY: 30,
    });

    // Save the PDF
    doc.save(`${tableName}.pdf`);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "xl", // Set a specific max-width
        margin: "auto", // Center the table
        marginTop: 2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
        <Tooltip
          title={
            <span style={{ fontSize: "1.5em" }}>
              Nähtusklassi geomeetria: punkt
            </span>
          }
          placement="top"
        >
          <img src={imageSrc} alt="Multipoint" width={50} height={50} />
        </Tooltip>

        <Tooltip
          title={
            <span style={{ fontSize: "1.5em" }}>
              Ruumikuju dimensioon: 2.5D
            </span>
          }
          placement="top"
        >
          <Box
            sx={{
              marginRight: 1,
              p: 0.5,
              border: "3px solid black",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              transform: "translateY(-2px)",
            }}
          >
            2.5D
          </Box>
        </Tooltip>

        <Typography variant="h4" sx={{ marginLeft: 2 }}>
          {tableName}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<FileDownloadIcon />}
          sx={{ marginLeft: "auto", marginRight: 2 }}
          onClick={handleExportPDF}
        >
          Export to PDF
        </Button>
      </div>
      <div>
        <Typography variant="h5" sx={{ marginLeft: 2 }}>
          Kivi
        </Typography>

        <Typography sx={{ marginLeft: 2 }}>Andmestik: levituum</Typography>

        <Typography sx={{ marginLeft: 2 }}>
          Objekte nähtusklassis: 103626 (wfs päring?)
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
