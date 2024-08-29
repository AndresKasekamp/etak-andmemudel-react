import { Name } from "./types";

export interface FeatureClass {
  fcName: string;
  elements: Row[];

}
// Define types for the parameters and the return value
export interface FeatureClassPath {
  path: string;
  element: React.ReactElement;

}

export interface Row {
  position: number;
  row: RowData; 
}

export interface EtakTableProps {
  addedRows: Row[];
  imageSrc: string
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
