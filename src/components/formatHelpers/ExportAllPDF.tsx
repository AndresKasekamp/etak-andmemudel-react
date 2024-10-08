import { jsPDF } from "jspdf"; //or use your library of choice here
import autoTable from "jspdf-autotable";

import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { generateTableFront } from "./generateTableFront";
import { AllTablesAndDomains } from "../../interfaces/interfaces";


// TODO viimane leht jääb tühjaks praegu selle lahendusega
export const ExportAllPDF = ({
  allTablesAndDomains,
  domainsMerged,
}: AllTablesAndDomains) => {
  const handleExportPDF = () => {
    const doc = new jsPDF();

    // Add the title or any other header elements
    doc.setFontSize(18);

    allTablesAndDomains.map((rows) => {
      const cleanRows = generateTableFront(rows.headingData, rows.elements);
      doc.text(rows.fcName, 14, 22);
      // AutoTable function to generate the table
      autoTable(doc, {
        head: [["Välja nimi", "Andmetüüp", "Domeen", "Kirjeldus"]],
        body: cleanRows.map((row) => [
          row.name.name,
          row.dataType,
          row.domain,
          row.desc.desc,
        ]),
        startY: 30,
      });

      doc.addPage();
    });

    domainsMerged.map((domain) => {
      doc.text(domain.name, 14, 22);
      // AutoTable function to generate the table
      autoTable(doc, {
        head: [["Kood", "Nimetus"]],
        body: domain.elements.map((row) => [row.kood, row.nimetus]),
        startY: 30,
      });

      doc.addPage();
    });

    // Save the PDF
    doc.save("etak-andmemudel-koos.pdf");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FileDownloadIcon />}
      sx={{ marginTop: 1 }}
      onClick={handleExportPDF}
    >
      Lae alla kõik tabelid
    </Button>
  );
};
