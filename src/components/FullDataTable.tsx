import { FieldsTable } from "./FieldsTable.tsx";
import { DomainTableMain } from "./domains/DomainTableMain.tsx";
import { sortElements } from "../utils/sortElements.ts";
import { FeatureClassOutput } from "../interfaces/interfaces.tsx";
import Container from "@mui/material/Container";

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
    <Container
      sx={{
        maxWidth: {
          xs: "lg",
          xl: "xl",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
    </Container>
  );
};
