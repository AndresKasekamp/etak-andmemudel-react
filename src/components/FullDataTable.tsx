import { MainTableProps } from "../interfaces/interfaces.tsx";
import { FieldsTable } from "./FieldsTable.tsx";
import { DomainTableMain } from "./domains/DomainTableMain.tsx";
import { sortElements } from "./formatHelpers/sortElements.ts";

export const FullDataTable = ({
  name,
  group,
  rows,
  domains,
  headingData,
}: MainTableProps) => {
  // Formatting domains and rows
  domains.sort((a, b) => a.name.localeCompare(b.name));

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
        rows={sortElements(rows)}
        name={name}
        group={group}
        headingData={headingData}
        domains={domains}
      ></FieldsTable>
      <DomainTableMain domains={domains}></DomainTableMain>
    </div>
  );
};
