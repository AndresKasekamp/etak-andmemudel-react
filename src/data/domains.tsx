import domains from "../api/levituum/domains.json" assert { type: "json" };

import { DomainTable } from "../interfaces/interfaces";

// TODO ilmselt on kaks domainFinderit vaja kirjutada
export const domainFinder = (name: string): DomainTable => {
  const foundDomain = domains.find((domain) => domain.name === name);

  // TODO muuda see tagasi (3D on oma domeenid ka)
  // if (!foundDomain) {
  //   throw new Error(`Domain with name "${name}" not found.`);
  // }

  // @ts-ignore
  return foundDomain;
};
