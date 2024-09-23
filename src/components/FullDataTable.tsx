import { useLocation, Location } from "react-router-dom";

import { getTableName } from "../utils/utils.tsx";
import { EtakTableProps } from "../interfaces/interfaces.tsx";

import { FieldsTable } from "./FieldsTable.tsx";

import { DomainTableMain } from "./domains/DomainTableMain.tsx";

import { generateTableFront } from "./formatHelpers/generateTableFront.ts";

export const FullDataTable = ({
  addedRows,
  imageSrc,
  associatedDomains,
  headingData,
}: EtakTableProps) => {
  const location: Location = useLocation();

  const tableName = getTableName(location);

  const updatedRows = generateTableFront(headingData, addedRows);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <FieldsTable
        updatedRows={updatedRows}
        imageSrc={imageSrc}
        tableName={tableName}
        headingData={headingData}
      ></FieldsTable>

      <DomainTableMain associatedDomains={associatedDomains}></DomainTableMain>
    </div>
  );
};
