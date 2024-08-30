import { Name } from "./types";

export interface FeatureClass {
  fcName: string;
  elements: Row[];
  domainTables: Domain[];
}
// Define types for the parameters and the return value
export interface FeatureClassPath {
  path: string;
  element: React.ReactElement;
}

interface DataDomainElements {
  kood: number
  nimetus: string
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

export interface EtakTableProps {
  addedRows: Row[];
  imageSrc: string;
  associatedDomains: object[];
}

export interface EtakTableProps2 {
  updatedRows: RowData[];
  imageSrc: string;
  tableName: string;
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
  url: string
}