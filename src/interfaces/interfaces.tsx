

interface HeadingData {
  geomType: string;
  geomDimension: number;
  image: string;
  estName: string;
}

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

export interface AllTablesAndDomainsMerge {
  allTablesAndDomains: FeatureClassOutput[];
  domainsMerged: DomainTable[];
}

export interface FeatureClassPath {
  element: React.ReactElement;
}

export interface ObjectCountResponse {
  totalFeatures: number;
}

export interface ObjectCountProps {
  url: string;
}


export interface DetailViewLinkProps {
  group: string;
  table: string;
}