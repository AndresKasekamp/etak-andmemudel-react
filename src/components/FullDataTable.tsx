
import { MainTableProps } from "../interfaces/interfaces.tsx";

import { FieldsTable } from "./FieldsTable.tsx";

import { DomainTableMain } from "./domains/DomainTableMain.tsx";

import { generateTableFront } from "./formatHelpers/generateTableFront.ts";

export const FullDataTable = ({
  name,
  group,
  rows,
  domains,
  headingData,
}: MainTableProps) => {

  const updatedRows = generateTableFront(headingData, rows);
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
        rows={updatedRows}
        name={name}
        group={group}
        headingData={headingData}
        domains={domains}
      ></FieldsTable>
      <DomainTableMain domains={domains}></DomainTableMain>
    </div>
  );
};
