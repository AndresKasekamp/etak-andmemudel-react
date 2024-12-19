import { FieldsTable } from "./FieldsTable.tsx";
import { DomainTableMain } from "./domains/DomainTableMain.tsx";
import { generateDomainsTogether } from "../utils/generateTableFront.ts";
import { ExportAllPDF } from "./export/ExportAllPDF.tsx";

import { AllTablesAndDomains } from "../interfaces/interfaces.tsx";

import { sortElements } from "../utils/sortElements.ts";

export const OnePagerForData = ({
  allTablesAndDomains,
}: AllTablesAndDomains) => {
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
