import {
  SHORT_INTEGER,
  INTEGER,
  DATE,
  GEOMETRY,
} from "../../data/dataTypes";

import {
  MainCategory,
  EsriCategory,
  EtakMetaCategory,
  RegisterCategory,
} from "../../data/colors";

export const dataTypes = {
  OID: INTEGER,
  Geometry: GEOMETRY,
  Date: DATE,
  Integer: INTEGER,
  SmallInteger: SHORT_INTEGER,
  String: "tekst", // TODO seal on pärast veel mingi sulgudes reegeld ()
};

export const bgColor = {
  technical: EsriCategory,
  meta: EtakMetaCategory,
  general: MainCategory,
  register: RegisterCategory,
};
