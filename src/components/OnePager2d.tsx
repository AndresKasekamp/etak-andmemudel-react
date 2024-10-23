
import { FieldsTable } from "./FieldsTable.tsx";
import { DomainTableMain } from "./domains/DomainTableMain.tsx";
import { generateDomainsTogether } from "./formatHelpers/generateTableFront.ts";
import { ExportAllPDF } from "./formatHelpers/ExportAllPDF.tsx";

import { AllTablesAndDomains2 } from "../interfaces/interfaces2.tsx";

import { sortElements } from "./formatHelpers/sortElements.ts";
// TODO domeenid on vaja settida ja panna tähestiku vms järjekorda

export const OnePager2d = ({ allTablesAndDomains }: AllTablesAndDomains2) => {
  // Manipulating domains into singular
  const domainsMerged = generateDomainsTogether(allTablesAndDomains);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <ExportAllPDF
        allTablesAndDomains={allTablesAndDomains}
        domainsMerged={domainsMerged}
      />

      {allTablesAndDomains.map((ad, idx) => (
        // Custom comparator function

        <FieldsTable
          key={idx}
          fcName={ad.fcName}
          groupName={ad.groupName}
          elements={sortElements(ad.elements)}
          headingData={ad.headingData}
          domainTables={ad.domainTables.sort((a, b) =>
            a.name.localeCompare(b.name)
          )}
        ></FieldsTable>
      ))}
      <DomainTableMain domains={domainsMerged}></DomainTableMain>
    </div>
  );
};
