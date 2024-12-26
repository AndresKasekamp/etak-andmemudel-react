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

import ObjectCount from "./helpers/ObjectCount.tsx";
import { HashLink } from "react-router-hash-link";

import { TableHeaderColor } from "../data/colors.ts";

import { DetailViewLink } from "./DetailViewLink.tsx";
import { useLocation, Location } from "react-router-dom";
import { getTableName } from "../utils/utils.tsx";
import { generateWfsUrl } from "../utils/wfsRequest.ts";

import { bgColor, determineDataType } from "../utils/translate.ts";
import { FeatureClassOutput } from "../interfaces/interfaces.tsx";

import RegisterHyperLink from "./helpers/RegisterHyperLink.tsx";

import { CategoryKey } from "../utils/translate.ts";
import { useTranslation } from "react-i18next";
import { Description } from "../interfaces/interfaces.tsx";

import ValueChartBar from "./ValueChartBar.tsx";
import BarChartIcon from "@mui/icons-material/BarChart";

import { useState } from "react";

import { derivedPathMany, threeDPath } from "../pages/paths/groupPaths";

import { FileFormat } from "./helpers/FileFormat.tsx";

export const FieldsTable = ({
  elements,
  fcName,
  groupName,
  headingData,
  domainTables,
}: FeatureClassOutput) => {
  // State for managing the modal
  // const [open, setOpen] = useState(false);
  const [openRow, setOpenRow] = useState<number | null>(null); // To track the open row index

  const handleOpen = (index: number): void => {
    setOpenRow(index); // Open the modal for the clicked row
  };

  const handleClose = (): void => {
    setOpenRow(null); // Close the modal
  };

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
        row.type,
        row.domain,
        row.desc[appLang],
      ]),
      startY: 30,
    });

    // Domain added to pdf
    domainTables.map((domain) => {
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
  const locationPathName = location.pathname.split("/")[1];
  const pathNameEnd = getTableName(location);

  const getFeatureCount = () => {
    switch (locationPathName) {
      case "tuletiskihid":
        return (
          <ObjectCount
            url={generateWfsUrl(fcName, true)}
            hardcodedCount={headingData.count}
          ></ObjectCount>
        );
      default:
        return (
          <ObjectCount
            url={generateWfsUrl(fcName)}
            hardcodedCount={headingData.count}
          ></ObjectCount>
        );
    }
  };

  const getFileFormats = () => {
    switch (locationPathName) {
      case "tuletiskihid":
        return (
          <>
            <FileFormat info={"spec info"} format={"SHP"}></FileFormat>
            <FileFormat info={"spec info"} format={"TAB"}></FileFormat>
            <FileFormat info={"spec info"} format={"GPKG"}></FileFormat>
          </>
        );
      case "3d":
        return (
          <>
            <FileFormat info={"spec info"} format={"GDB"}></FileFormat>
            <FileFormat info={"spec info"} format={"CityGML"}></FileFormat>
            <FileFormat info={"spec info"} format={"OBJ"}></FileFormat>
          </>
        );
      default:
        return (
          <>
            <FileFormat info={"spec info"} format={"SHP"}></FileFormat>
            <FileFormat info={"spec info"} format={"GDB"}></FileFormat>
            <FileFormat info={"spec info"} format={"TAB"}></FileFormat>
            <FileFormat info={"spec info"} format={"GPKG"}></FileFormat>
            <FileFormat info={"spec info"} format={"DGN"}></FileFormat>
            <FileFormat info={"spec info"} format={"DWG"}></FileFormat>
          </>
        );
    }
  };


  const isLevituum = () => {
    const extraLayers = [derivedPathMany, threeDPath];
    return `${t("dataFrom")}: ${
      extraLayers.includes(locationPathName) ? locationPathName : "levituum"
    }`;
  };

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
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
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
            {getFileFormats()}

            <Button
              variant="contained"
              color="primary"
              startIcon={<FileDownloadIcon />}
              sx={{ marginLeft: 2, marginRight: 2 }}
              onClick={handleExportPDF}
            >
              PDF
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ marginLeft: 2 }}>
            {headingData.desc[appLang]}
          </Typography>

          <Typography sx={{ marginLeft: 2 }}>{isLevituum()}</Typography>

          <Box sx={{ display: "flex" }}>
            <Typography sx={{ marginLeft: 2 }}>
              {t("objectCount")}:&nbsp;
            </Typography>
            {getFeatureCount()}
          </Box>
        </Box>
      </Box>

      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        {pathNameEnd === "all" ? (
          <caption>
            <DetailViewLink
              locationPathName={locationPathName}
              group={groupName}
              table={fcName}
            />
          </caption>
        ) : null}

        <TableHead>
          <TableRow
            sx={{
              backgroundColor: TableHeaderColor,
            }}
          >
            <TableCell>{t("fieldName")}</TableCell>
            <TableCell>{t("fieldType")}</TableCell>
            <TableCell>{t("fieldDomain")}</TableCell>
            <TableCell>{t("fieldDesc")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {elements.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: bgColor[row.meta_type as CategoryKey],
              }}
            >
              <TableCell
                component="th"
                scope="row"
                onClick={() =>
                  Object.entries(row.chart_values).length !== 0
                    ? handleOpen(index) // Pass row index to open specific modal
                    : undefined
                }
                sx={{
                  cursor:
                    Object.entries(row.chart_values).length !== 0
                      ? "pointer"
                      : "default",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {row.name}
                {Object.entries(row.chart_values).length !== 0 && (
                  <BarChartIcon fontSize="small" sx={{ color: "green" }} />
                )}
              </TableCell>

              <ValueChartBar
                open={openRow === index}
                handleClose={handleClose}
                row={row}
              />

              <TableCell>{determineDataType(row.type, appLang)}</TableCell>

              <TableCell>
                <HashLink smooth to={`#${row.domain}`}>
                  {row.domain}
                </HashLink>
              </TableCell>

              <TableCell>
                {row.link ? (
                  <RegisterHyperLink
                    link={row.link}
                    desc={row.desc[appLang]}
                  ></RegisterHyperLink>
                ) : (
                  row.desc[appLang]
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
