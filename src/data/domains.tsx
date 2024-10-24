import domains from "../api/domains.json" assert { type: "json" };

import { DomainTable } from "../interfaces/interfaces";

export const domainFinder = (name: string): DomainTable => {
  const foundDomain = domains.find((domain) => domain.name === name);

  if (!foundDomain) {
    throw new Error(`Domain with name "${name}" not found.`);
  }

  // @ts-ignore
  return foundDomain;
};
