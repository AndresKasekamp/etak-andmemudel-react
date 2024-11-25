interface HeadingData {
  geomType: string;
  geomDimension: number;
  image: string;
  estName: string;
  count: number;
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
  group: string;
  fields: Field[];
  desc: string;
  count: number;
  geom_type: string
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
  metaandmed: FeatureClassOutput[];
  punktobjektid: FeatureClassOutput[];
  joonobjektid: FeatureClassOutput[];
  pindobjektidOverlap: FeatureClassOutput[];
  pindobjektid: FeatureClassOutput[];
  tuletiskihid: FeatureClassOutput[];
  threeD: FeatureClassOutput[];
}

export interface AllTablesAndDomains {
  allTablesAndDomains: FeatureClassOutput[];
}

export interface DomainTableMainProps {
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
  hardcodedCount: number
}

export interface DetailViewLinkProps {
  group: string;
  table: string;
}

export interface RegisterHyperLinkProps {
  link: string;
  desc: string;
}

export interface TablesTogetherLinkProps {
  route: string;
}

export interface TableProps {
  objectName: string;
  itemNames: FeatureClassOutput[];
  dataTypeClass: string;
}

// Define the shape of each value in the dictionary
export interface GeomTypeInfo {
  geom_type: string; // or a specific type like `GeomType`
  dimension: number;
  image: string; // Assuming `lineImageSource` and `polyImageSource` are strings; adjust as necessary
}

// Use a union type for the keys (valid geometry types)
export type GeomTypeKey = "Multi Line String" | "Line String" | "Polygon" | "3D Point" | "3D Multi Line String" | "3D Multi Polygon" | "Multi Polygon" | "3D TIN" | "Point";