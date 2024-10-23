import { FieldsTable } from "./FieldsTable.tsx";
import { DomainTableMain } from "./domains/DomainTableMain.tsx";
import { sortElements } from "./formatHelpers/sortElements.ts";
import { FeatureClassOutput } from "../interfaces/interfaces.tsx";

export const FullDataTable = ({
  fcName,
  groupName,
  elements,
  domainTables,
  headingData,
}: FeatureClassOutput) => {
  // Formatting domains and rows
  domainTables.sort((a, b) => a.name.localeCompare(b.name));

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
        elements={sortElements(elements)}
        fcName={fcName}
        groupName={groupName}
        headingData={headingData}
        domainTables={domainTables}
      ></FieldsTable>
      <DomainTableMain domains={domainTables}></DomainTableMain>
    </div>
  );
};
