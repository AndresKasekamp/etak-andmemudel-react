import { MainTableProps } from "../interfaces/interfaces.tsx";

import { FieldsTable } from "./FieldsTable.tsx";

import { DomainTableMain } from "./domains/DomainTableMain.tsx";

import { generateTableFront } from "./formatHelpers/generateTableFront.ts";

import { generateFeatureClass } from "../data/featureClasses.tsx";

export const FullDataTable = ({
  name,
  group,
  rows,
  domains,
  headingData,
}: MainTableProps) => {
  // Formatting domains and rows
  domains.sort((a, b) => a.name.localeCompare(b.name));

  const orderOfRows = ["general", "technical", "meta", "register"];

  // Custom comparator function
  rows.sort((a, b) => {
    return orderOfRows.indexOf(a.meta_type) - orderOfRows.indexOf(b.meta_type);
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
      <FieldsTable
        rows={rows}
        name={name}
        group={group}
        headingData={headingData}
        domains={domains}
      ></FieldsTable>
      <DomainTableMain domains={domains}></DomainTableMain>
    </div>
  );
};
