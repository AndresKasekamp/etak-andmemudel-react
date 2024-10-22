// Type Definitions
export interface Field {
  name: string;
  domain?: string;
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
  headingData: {
    geomType: string;
    geomDimension: number;
    image: string;
    estName: string;
  };
}

export interface FeatureClasses {
  punktobjektid: FeatureClassOutput[];
  joonobjektid: FeatureClassOutput[];
  pindobjektidOverlap: FeatureClassOutput[];
  pindobjektid: FeatureClassOutput[];
}
