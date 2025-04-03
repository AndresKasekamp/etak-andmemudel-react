import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { jsPDF } from "jspdf"; //or use your library of choice here
import autoTable from "jspdf-autotable";

import { useLocation, Location } from "react-router-dom";
import { getTableName } from "../utils/utils.ts";

import { determineDataType } from "../utils/translate.ts";
import { FeatureClassOutput } from "../interfaces/interfaces.tsx";

import { useTranslation } from "react-i18next";
import { Description } from "../interfaces/interfaces.tsx";

import { DataTable } from "./table/DataTable.tsx";
import { getFeatureCount, getFileFormats, isLevituum } from "./table/utils.tsx";

import CopyUrlButton from "./helpers/CopyUrlButton.tsx";

export const FieldsTable = ({
  elements,
  fcName,
  groupName,
  headingData,
  domainTables,
}: FeatureClassOutput) => {
  const { i18n, t } = useTranslation();
  const appLang: keyof Description = i18n.language;

  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(fcName, 14, 22);

    // AutoTable function to generate the main table logic
    autoTable(doc, {
      head: [
        [t("fieldName"), t("fieldType"), t("fieldDomain"), t("fieldDesc")],
      ],
      body: elements.map((row) => [
        row.name,
        determineDataType(row.type, appLang),
        row.domain,
        row.desc[appLang],
      ]),
      startY: 30,
    });

    // Domain added to pdf
    domainTables.forEach((domain) => {
      doc.addPage();
      doc.text(domain.name, 14, 22);
      // AutoTable function to generate the table
      autoTable(doc, {
        head: [[t("fieldDomainCode"), t("fieldDomainNaming")]],
        //body: domain.coded_values.map((row) => [row.kood, row.nimetus]),
        body: Object.entries(domain.coded_values).map(([key, value]) => [
          key,
          value,
        ]),
        startY: 30,
      });
    });

    // Save the PDF
    doc.save(`${fcName}.pdf`);
  };

  const location: Location = useLocation();
  const [pathNameEnd, locationPathName] = getTableName(location);

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
        // overflowX: 'auto'
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: 2,
            marginTop: 1,
          }}
        >
          <Tooltip
            title={
              <span style={{ fontSize: "1.5em" }}>
                {t("featureClassGeometry")}: {headingData.geomType}
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
                {t("spatialDimension")}: {headingData.geomDimension}D
              </span>
            }
            placement="top"
          >
            <Box
              sx={{
                marginLeft: 1,
                marginRight: 1,
                p: 0.5,
                border: "3px solid black",
                transform: "translateY(-2px)",
              }}
            >
              {headingData.geomDimension}D
            </Box>
          </Tooltip>

          <Typography variant="h4" sx={{ marginRight: 1 }}>
            {fcName}
          </Typography>

          <Box sx={{ marginLeft: "auto" }}>
            {getFileFormats(locationPathName, pathNameEnd)}

            {CopyUrlButton(pathNameEnd)}

            <Button
              variant="contained"
              color="primary"
              startIcon={<FileDownloadIcon />}
              sx={{ marginLeft: 1, marginRight: 2 }}
              onClick={handleExportPDF}
            >
              PDF
            </Button>
          </Box>
        </Box>

        {pathNameEnd === "all" ? null : (
          <Box>
            <Typography variant="h5" sx={{ marginLeft: 2 }}>
              {headingData.desc[appLang]}
            </Typography>

            <Typography sx={{ marginLeft: 2 }}>
              {isLevituum(locationPathName)}
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography sx={{ marginLeft: 2 }}>
                {t("objectCount")}:&nbsp;
              </Typography>
              {getFeatureCount(locationPathName, fcName, headingData)}
            </Box>
          </Box>
        )}
      </Box>

      <DataTable
        pathNameEnd={pathNameEnd}
        locationPathName={locationPathName}
        groupName={groupName}
        fcName={fcName}
        elements={elements}
      />
    </TableContainer>
  );
};
