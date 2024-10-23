import { SHORT_INTEGER, INTEGER, DATE, GEOMETRY } from "../../data/dataTypes";

import {
  MainCategory,
  EsriCategory,
  EtakMetaCategory,
  RegisterCategory,
} from "../../data/colors";

export type DataTypeKey =
  | "OID"
  | "Geometry"
  | "Date"
  | "Integer"
  | "SmallInteger"
  | "String";
export type DataTypeValue =
  | typeof INTEGER
  | typeof GEOMETRY
  | typeof DATE
  | typeof SHORT_INTEGER
  | string;

export const dataTypes: Record<DataTypeKey, DataTypeValue> = {
  OID: INTEGER,
  Geometry: GEOMETRY,
  Date: DATE,
  Integer: INTEGER,
  SmallInteger: SHORT_INTEGER,
  String: "tekst", // TODO seal on pärast veel mingi sulgudes reegeld ()
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
