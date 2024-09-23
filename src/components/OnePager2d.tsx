import { AllTablesAndDomains } from "../interfaces/interfaces.tsx";

import { FullDataTable } from "./FullDataTable.tsx";

export const OnePager2d = ({ allTablesAndDomains }: AllTablesAndDomains) => {
  console.log("ALL TABLES AND DOMAINS", allTablesAndDomains);
  return allTablesAndDomains.map((ad, idx) => (
    <FullDataTable
      key={idx}
      name={ad.fcName}
      rows={ad.elements}
      domains={ad.domainTables}
      headingData={ad.headingData}
    ></FullDataTable>
  ));
};
