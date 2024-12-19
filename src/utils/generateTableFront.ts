import { FeatureClassOutput } from "../interfaces/interfaces.tsx";

export const generateDomainsTogether = (
  allTablesAndDomains: FeatureClassOutput[]
) => {
  // Manipulating domains into singular
  const domainsMergedSet = new Set(
    allTablesAndDomains.map((obj) => obj.domainTables).flat()
  );

  const domainsMerged = [...domainsMergedSet];
  domainsMerged.sort((a, b) => a.name.localeCompare(b.name));

  return domainsMerged;
};
