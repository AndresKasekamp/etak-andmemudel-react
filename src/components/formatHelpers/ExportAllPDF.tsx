import { jsPDF } from "jspdf"; //or use your library of choice here
import autoTable from "jspdf-autotable";

import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AllTablesAndDomainsMerge } from "../../interfaces/interfaces";

// TODO viimase lehe probleem lahendada
export const ExportAllPDF = ({
  allTablesAndDomains,
  domainsMerged,
}: AllTablesAndDomainsMerge) => {
  console.log("all tables and domains", allTablesAndDomains);

  const handleExportPDF = () => {
    const doc = new jsPDF();

    // Add the title or any other header elements
    doc.setFontSize(18);

    allTablesAndDomains.map((rows) => {
      doc.text(rows.fcName, 14, 22);
      // AutoTable function to generate the table
      autoTable(doc, {
        head: [["Välja nimi", "Andmetüüp", "Domeen", "Kirjeldus"]],
        body: rows.elements.map((row) => [
          row.name,
          row.type,
          row.domain,
          row.desc,
        ]),
        startY: 30,
      });

      doc.addPage();
    });

    domainsMerged.map((domain, index) => {
      doc.text(domain.name, 14, 22);
      // AutoTable function to generate the table
      autoTable(doc, {
        head: [["Kood", "Nimetus"]],
        body: Object.entries(domain.coded_values).map(([key, value]) => [
          key,
          value,
        ]),
        startY: 30,
      });

      // Only add a new page if it's not the last domain
      if (index < domainsMerged.length - 1) {
        doc.addPage();
      }
    });

    const groupName = allTablesAndDomains[0].groupName;

    switch (groupName) {
      case "3d":
        doc.save("etak-3d-koos.pdf");
        break;
      case "tuletiskiht":
        doc.save("etak-tuletiskiht-koos.pdf");
        break;
      default:
        doc.save("etak-andmemudel-koos.pdf");
        break;
    }
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
