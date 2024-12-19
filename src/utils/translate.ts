import {
  SHORT_INTEGER,
  INTEGER,
  DATE,
  GEOMETRY,
  REAL_NUMBER,
} from "../data/dataTypes";

import {
  MainCategory,
  EsriCategory,
  EtakMetaCategory,
  RegisterCategory,
} from "../data/colors";

export type DataTypeKey =
  | "OID"
  | "Geometry"
  | "DateTime"
  | "Integer"
  | "ShortInteger"
  | "Real"

export type DataTypeValue =
  | typeof INTEGER
  | typeof GEOMETRY
  | typeof DATE
  | typeof SHORT_INTEGER
  | typeof REAL_NUMBER

export const determineDataType = (datatype: string, appLang: string) => {
  const dataTypes: Record<DataTypeKey, DataTypeValue> = {
    OID: INTEGER,
    Geometry: GEOMETRY,
    DateTime: DATE,
    Integer: INTEGER,
    ShortInteger: SHORT_INTEGER,
    Real: REAL_NUMBER
  };
  if (appLang === "et") {
    if (datatype.includes("String")) {
        return datatype.replace("String", "tekst");
    }
    return dataTypes[datatype as DataTypeKey];
  }
  return datatype;
};

export const dataTypes: Record<DataTypeKey, DataTypeValue> = {
  OID: INTEGER,
  Geometry: GEOMETRY,
  DateTime: DATE,
  Integer: INTEGER,
  ShortInteger: REAL_NUMBER,
  Real: SHORT_INTEGER,
};

export type CategoryKey = "technical" | "meta" | "general" | "register";
export type CategoryValue =
  | typeof EsriCategory
  | typeof EtakMetaCategory
  | typeof MainCategory
  | typeof RegisterCategory;

export const bgColor: Record<CategoryKey, CategoryValue> = {
  technical: EsriCategory,
  meta: EtakMetaCategory,
  general: MainCategory,
  register: RegisterCategory,
};
