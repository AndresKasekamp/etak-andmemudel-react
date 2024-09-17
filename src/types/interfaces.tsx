import { Name } from "./types";

// TODO loogika üle vaadata
export interface FeatureClass {
  fcName: string;
  elements: Row[];
  domainTables: Domain[];
  headingData: headingData;
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

interface Domain {
  name: string;
  dataType: string;
  elements: DataDomainElements[];
  desc: string;
}

export interface DomainTableProps {
  domain: Domain;
}

export interface Row {
  position: number;
  row: RowData;
}

export interface headingData {
  geomType: string;
  geomDimension: number;
  estName: string;
}

export interface EtakTableProps {
  addedRows: Row[];
  imageSrc: string;
  associatedDomains: Domain[];
  headingData: headingData;
}

export interface EtakTableProps2 {
  updatedRows: RowData[];
  imageSrc: string;
  tableName: string;
  headingData: headingData;
}

export interface RowData {
  name: Name;
  dataType: string;
  domain: string;
  desc: string;
}

export interface TableProps {
  backgroundColor: string;
  objectName: string;
  itemNames: FeatureClass[];
  dataTypeClass: string;
}

// Define the structure of the API response
export interface ObjectCountResponse {
  totalFeatures: number; // Assuming totalFeatures is a number
}

export interface ObjectCountProps {
  url: string;
}
