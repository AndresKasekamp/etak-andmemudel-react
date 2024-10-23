import { HeadingData } from "./interfaces";
// Type Definitions

// TODO siin on suur osa puudu
export interface Field {
  name: string;
  domain: string;
  type: string;
  meta_type: string;
  link: string | null;
  desc: string;
}

export interface FeatureClassInput {
  name: string;
  fields: Field[];
  desc: string;
}

export interface GeometryInfo {
  group: string;
  type: string;
  dimension: number;
  image: string;
}

export interface DomainTable {
  name: string;
  desc: string;
  coded_values: Record<string, string>;
}

export interface FeatureClassOutput {
  fcName: string;
  groupName: string;
  elements: Field[];
  domainTables: DomainTable[];
  headingData: HeadingData;
}

export interface FeatureClasses {
  punktobjektid: FeatureClassOutput[];
  joonobjektid: FeatureClassOutput[];
  pindobjektidOverlap: FeatureClassOutput[];
  pindobjektid: FeatureClassOutput[];
}


export interface AllTablesAndDomains2 {
  allTablesAndDomains: FeatureClassOutput[];
}

export interface DomainTableMainProps2 {
  domains: DomainTable[];
}

export interface DomainTableProps2 {
  domain: DomainTable;
}