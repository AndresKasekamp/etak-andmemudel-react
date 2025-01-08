import domains_levituum from "../api/levituum/domains.json" assert { type: "json" };
import domains_3D from "../api/3D/domains.json" assert { type: "json" };

import { DomainTable } from "../interfaces/interfaces";

export const domainFinderForLevituum = (name: string): DomainTable => {
  const foundDomain = domains_levituum.find((domain) => domain.name === name);

  if (!foundDomain) {
    throw new Error(`Domain with name "${name}" not found.`);
  }

  // @ts-ignore
  return foundDomain;
};

export const domainFinderFor3D = (name: string): DomainTable => {
  const foundDomain = domains_3D.find((domain) => domain.name === name);

  if (!foundDomain) {
    throw new Error(`Domain with name "${name}" not found.`);
  }

  // @ts-ignore
  return foundDomain;
};
