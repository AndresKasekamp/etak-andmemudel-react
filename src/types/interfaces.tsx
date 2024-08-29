import { Name } from "./types";

export interface FeatureClass {
  fcName: string;
  elements: Row[]; // Replace 'Row' with the correct type of elements in EtakTable
}
// Define types for the parameters and the return value
export interface FeatureClassPath {
  path: string;
  element: React.ReactElement;
}

export interface Row {
  position: number;
  row: RowData; // Replace 'any' with the specific type of your row
}

export interface EtakTableProps {
  addedRows: Row[];
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
  itemNames: string[];
  dataTypeClass: string;
}
