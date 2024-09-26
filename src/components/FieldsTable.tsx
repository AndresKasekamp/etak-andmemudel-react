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

import { FieldsTableProps } from "../interfaces/interfaces.tsx";
import ObjectCount from "./formatHelpers/ObjectCount.tsx";
import { HashLink } from "react-router-hash-link";

import { TableHeaderColor } from "../data/colors.ts";

import etak_kirjeldus from "../data/etak_kirjeldus.json" assert { type: "json" };
import { DetailViewLink } from "./DetailViewLink.tsx";
import { useLocation, Location } from "react-router-dom";
import { getTableName } from "../utils/utils.tsx";
import { generateWfsUrl } from "../utils/wfsRequest.ts";

export const FieldsTable = ({
  rows,
  name,
  group,
  headingData,
  domains,
}: FieldsTableProps) => {
  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(name, 14, 22);

    // AutoTable function to generate the main table logic
    autoTable(doc, {
      head: [["Välja nimi", "Andmetüüp", "Domeen", "Kirjeldus"]],
      body: rows.map((row) => [
        row.name.name,
        row.dataType,
        row.domain,
        row.desc.desc,
      ]),
      startY: 30,
    });

    // Domain added to pdf
    domains.map((domain) => {
      doc.addPage();
      doc.text(domain.name, 14, 22);
      // AutoTable function to generate the table
      autoTable(doc, {
        head: [["Kood", "Nimetus"]],
        body: domain.elements.map((row) => [row.kood, row.nimetus]),
        startY: 30,
      });
    });

    // Save the PDF
    doc.save(`${name}.pdf`);
  };

  const getFeatureCount = () => {
    switch (name) {
      case etak_kirjeldus.classes.alusdokument.name:
        return etak_kirjeldus.classes.alusdokument.count;
      case etak_kirjeldus.classes.vooluveed_kkr.name:
        return <ObjectCount url={generateWfsUrl(name, true)}></ObjectCount>;
      default:
        return <ObjectCount url={generateWfsUrl(name)}></ObjectCount>;
    }
  };

  const isLevituum = () => {
    const nonLevituum = [
      etak_kirjeldus.classes.alusdokument.name,
      etak_kirjeldus.classes.vooluveed_kkr.name,
      etak_kirjeldus.classes.seisuveed_kkr,
    ];

    if (nonLevituum.includes(name)) {
      return <br />;
    }

    return "Andmestik: levituum";
  };

  const location: Location = useLocation();

  const pathName = getTableName(location);

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: {
          xs: "lg", // For extra small and small screens, max width is "lg"
          xl: "xl", // For extra large screens, max width is "xl"
        },
        margin: "auto", // Center the table
        marginTop: 2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
        <Tooltip
          title={
            <span style={{ fontSize: "1.5em" }}>
              Nähtusklassi geomeetria: {headingData.geomType}
            </span>
          }
          placement="top"
        >
          <img
            src={headingData.image}
            alt="Multipoint"
            width={50}
            height={50}
          />
        </Tooltip>

        <Tooltip
          title={
            <span style={{ fontSize: "1.5em" }}>
              Ruumikuju dimensioon: {headingData.geomDimension}D
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
            {headingData.geomDimension}D
          </Box>
        </Tooltip>

        <Typography variant="h4" sx={{ marginLeft: 2, marginRight: 1 }}>
          {name}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<FileDownloadIcon />}
          sx={{ marginLeft: "auto", marginRight: 2 }}
          onClick={handleExportPDF}
        >
          PDF
        </Button>
      </div>
      <div>
        <Typography variant="h5" sx={{ marginLeft: 2 }}>
          {headingData.estName}
        </Typography>

        <Typography sx={{ marginLeft: 2 }}>{isLevituum()}</Typography>

        <div style={{ display: "flex" }}>
          <Typography sx={{ marginLeft: 2 }}>
            Objekte nähtusklassis:&nbsp;
          </Typography>
          {getFeatureCount()}
        </div>
      </div>

      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        {pathName === "2d" ? (
          <caption>
            <DetailViewLink group={group} table={name} />
          </caption>
        ) : null}

        <TableHead>
          <TableRow
            sx={{
              backgroundColor: TableHeaderColor,
            }}
          >
            <TableCell>Välja nimi</TableCell>
            <TableCell>Andmetüüp</TableCell>
            <TableCell>Domeen</TableCell>
            <TableCell>Kirjeldus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: row.name.category,
              }}
            >
              <TableCell component="th" scope="row">
                {row.name.name}
              </TableCell>
              <TableCell>{row.dataType}</TableCell>

              <TableCell>
                <HashLink smooth to={`#${row.domain}`}>
                  {row.domain}
                </HashLink>
              </TableCell>

              <TableCell>{row.desc.hyperlink ?? row.desc.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// export default EtakTable;
