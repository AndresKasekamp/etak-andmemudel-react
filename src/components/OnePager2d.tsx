import { AllTablesAndDomains1 } from "../interfaces/interfaces.tsx";

import { generateTableFront } from "./formatHelpers/generateTableFront.ts";
import { FieldsTable } from "./FieldsTable.tsx";
import { DomainTableMain } from "./domains/DomainTableMain.tsx";
import { generateDomainsTogether } from "./formatHelpers/generateTableFront.ts";
import { ExportAllPDF } from "./formatHelpers/ExportAllPDF.tsx";
// TODO domeenid on vaja settida ja panna tähestiku vms järjekorda

export const OnePager2d = ({ allTablesAndDomains }: AllTablesAndDomains1) => {
  console.log(allTablesAndDomains);

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
        <FieldsTable
          key={idx}
          name={ad.fcName}
          group={ad.groupName}
          rows={generateTableFront(ad.headingData, ad.elements)}
          headingData={ad.headingData}
          domains={ad.domainTables.sort((a, b) => a.name.localeCompare(b.name))}
        ></FieldsTable>
      ))}
      <DomainTableMain domains={domainsMerged}></DomainTableMain>
    </div>
  );
};
