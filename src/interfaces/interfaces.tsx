import { ReactNode } from "react";

export type Description = {
  [key: string]: string; // Accept any string key
  et: string;
  en: string;
};

export interface HeadingData {
  geomType: string;
  geomDimension: number;
  image: string;
  desc: Description;
  count: number;
}

export interface Field {
  name: string;
  domain: string;
  type: string;
  meta_type: string;
  link: string | null;
  desc: Description;
  chart_values: any;
}

export interface FeatureClassInput {
  name: string;
  group: string;
  fields: Field[];
  desc: Description;
  count: number;
  geom_type: string;
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
  tuletiskihidLines: FeatureClassOutput[];
  tuletiskihidPolygons: FeatureClassOutput[];
  lod2: FeatureClassOutput[];
  lod1: FeatureClassOutput[];
  lod0: FeatureClassOutput[];
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
  hardcodedCount: number;
}

export interface DetailViewLinkProps {
  locationPathName: string;
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

export interface ResourcesTableProps {
  data: TableProps[];
}

// Define the shape of each value in the dictionary
export interface GeomTypeInfo {
  geom_type: string; // or a specific type like `GeomType`
  dimension: number;
  image: string; // Assuming `lineImageSource` and `polyImageSource` are strings; adjust as necessary
}

// Type definition for the row prop
interface ChartRow {
  name: string;
  chart_values: Record<string, number>; // This represents the chart data where keys are strings and values are numbers
}

export interface CategoryLinkProps {
  path: string;
  title: string;
  icon: ReactNode;
}

export interface FileFormatProps {
  format: string;
}

export interface ValueChartBarProps {
  open: boolean;
  handleClose: () => void;
  row: ChartRow;
}

export type LocationFormats = {
  [key: string]: string[];
};

export interface DataTableProps {
  pathNameEnd: string;
  locationPathName: string;
  groupName: string;
  fcName: string;
  elements: Field[];
}

// Use a union type for the keys (valid geometry types)
export type GeomTypeKey =
  | "Multi Line String"
  | "Line String"
  | "Polygon"
  | "3D Point"
  | "3D Multi Line String"
  | "3D Multi Polygon"
  | "Multi Polygon"
  | "3D TIN"
  | "Point";
