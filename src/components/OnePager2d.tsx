import { AllTablesAndDomains } from "../interfaces/interfaces.tsx";

import { generateTableFront } from "./formatHelpers/generateTableFront.ts";
import { FieldsTable } from "./FieldsTable.tsx";
import { DomainTableMain } from "./domains/DomainTableMain.tsx";
import { generateDomainsTogether } from "./formatHelpers/generateTableFront.ts";
// TODO domeenid on vaja settida ja panna tähestiku vms järjekorda

export const OnePager2d = ({ allTablesAndDomains }: AllTablesAndDomains) => {
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
      {allTablesAndDomains.map((ad, idx) => (
        <FieldsTable
          key={idx}
          name={ad.fcName}
          rows={generateTableFront(ad.headingData, ad.elements)}
          headingData={ad.headingData}
        ></FieldsTable>
      ))}
      <DomainTableMain domains={domainsMerged}></DomainTableMain>
    </div>
  );
};
