export interface ElementNameCategory {
  name: string;
  category: string;
}

export interface RowData {
  name: ElementNameCategory;
  dataType: string;
  domain: string;
  desc: DescRowData;
}

export interface FeatureClass {
  fcName: string;
  elements: Elements;
  domainTables: Domain[];
  headingData: HeadingData;
}
// Define types for the parameters and the return value
export interface FeatureClassPath {
  path: string;
  element: React.ReactElement;
}

interface DataDomainElements {
  kood: number;
  nimetus: string;
}

export interface Domain {
  name: string;
  dataType: string;
  elements: DataDomainElements[];
  desc: string;
}

// Define the type for associatedDomains, which is an array of Domain objects
export interface DomainTableMainProps {
  domains: Domain[];
}

export interface DomainTableProps {
  domain: Domain;
}

export interface Row {
  // position: number;
  row: RowData;
}

export interface HeadingData {
  geomType: string;
  geomDimension: number;
  image: string;
  estName: string;
}

export interface Elements {
  etak: Row[];
  register: Row[];
}

export interface AllTablesAndDomains {
  allTablesAndDomains: FeatureClass[];
}

export interface MainTableProps {
  name: string;
  rows: Elements;

  domains: Domain[];
  headingData: HeadingData;
}

export interface FieldsTableProps {
  rows: RowData[];

  name: string;
  headingData: HeadingData;
}

export interface DescRowData {
  desc: string;
  hyperlink: JSX.Element | null;
}

export interface TableProps {
  objectName: string;
  itemNames: FeatureClass[];
  dataTypeClass: string;
}

// Define the structure of the API response
export interface ObjectCountResponse {
  totalFeatures: number;
}

export interface ObjectCountProps {
  url: string;
}

export interface RegisterHyperLinkProps {
  link: string;
  desc: string;
}
