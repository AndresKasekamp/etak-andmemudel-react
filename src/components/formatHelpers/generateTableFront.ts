import { FeatureClass } from "../../interfaces/interfaces.tsx";

// TODO kogu seda jama pole ilmselt vaja, kui fieldist lugemist tööle saan

export const generateDomainsTogether = (
  allTablesAndDomains: FeatureClass[]
) => {
  // Manipulating domains into singular
  const domainsMergedSet = new Set(
    allTablesAndDomains.map((obj) => obj.domainTables).flat()
  );

  const domainsMerged = [...domainsMergedSet];
  domainsMerged.sort((a, b) => a.name.localeCompare(b.name));

  return domainsMerged;
};
