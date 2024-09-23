import { AllTablesAndDomains } from "../interfaces/interfaces.tsx";

import { FullDataTable } from "./FullDataTable.tsx";
import { pointImageSource } from "../data/imageSources.tsx";
export const OnePager2d = ({ allTablesAndDomains }: AllTablesAndDomains) => {
  console.log("ALL TABLES AND DOMAINS", allTablesAndDomains);
  return allTablesAndDomains.map((ad, idx) => (
    <FullDataTable
      key={idx}
      rows={ad.elements}
      image={pointImageSource}
      domains={ad.domainTables}
      headingData={ad.headingData}
    ></FullDataTable>
  ));
};
