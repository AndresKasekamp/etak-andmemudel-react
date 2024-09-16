import { useLocation, Location } from "react-router-dom";

import { mainRows } from "../data/constantFields.tsx";
import { getTableName } from "../utils/utils.tsx";
import { EtakTableProps } from "../types/interfaces.tsx";

import DomainTable from "./DomainTable.tsx";
import EtakTable from "./EtakTable.tsx";

import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

export default function EtakDataMain({
  addedRows,
  imageSrc,
  associatedDomains,
  headingData,
}: EtakTableProps) {
  const location: Location = useLocation();

  const tableName = getTableName(location);

  const updatedRows = [...mainRows];

  // Manipulating underlying array
  addedRows.forEach((row) => {
    if (row.position >= 0 && row.position <= updatedRows.length) {
      updatedRows.splice(row.position, 0, row.row);
    } else {
      console.warn(`Invalid position ${row.position} for row insertion.`);
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <EtakTable
        updatedRows={updatedRows}
        imageSrc={imageSrc}
        tableName={tableName}
        headingData={headingData}
      ></EtakTable>

      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "xl", // Set a specific max-width
          margin: "auto", // Center the table
          marginTop: 2,
          marginBottom: 2,
          display: "flex",
          alignItems: "start",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {associatedDomains.map((domain, idx) => (
          <DomainTable key={idx} domain={domain}></DomainTable>
        ))}
      </TableContainer>
    </div>
  );
}
