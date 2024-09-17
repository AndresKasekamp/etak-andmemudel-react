import { Name } from "../types/types";
import { RowData } from "../types/interfaces";
import { MainElementColor, EsriElementColor, EtakMetaColor, RegisterColor } from "./colors";
import etak_kirjeldus from './etak_kirjeldus.json' assert { type: 'json' };

export const createData = (
  name: Name,
  dataType: string,
  domain: string,
  desc: string
): RowData => {
  return { name, dataType, domain, desc };
};


export const otherShapes = [
  {
    shape_Length: createData(
      { name: etak_kirjeldus.classes._default.fields.shape_Length.name, color: EsriElementColor },
      "reaalarv",
      "",
      etak_kirjeldus.classes._default.fields.shape_Length.description.et
    ),

    shape_Area: createData(
      { name: etak_kirjeldus.classes._default.fields.shape_Area.name, color: EsriElementColor },
      "reaalarv",
      "",
      etak_kirjeldus.classes._default.fields.shape_Area.description.et
    ),
  },
];

// TODO välja arvatud sõidutee osa
export const otherRegisterSources = {
  kmr_id: createData(
    { name: etak_kirjeldus.classes._default.fields.kmr_id.name, color: RegisterColor },
    "täisarv",
    "",
    etak_kirjeldus.classes._default.fields.kmr_id.description.et
  ),

  kkr_kood: createData(
    { name: etak_kirjeldus.classes._default.fields.kkr_kood.name, color: RegisterColor },
    "tekst(30)",
    "",
    etak_kirjeldus.classes._default.fields.kkr_kood.description.et
  ),

  nimetus: createData(
    { name: etak_kirjeldus.classes._default.fields.nimetus.name, color: RegisterColor },
    "tekst(255)",
    "",
    etak_kirjeldus.classes._default.fields.nimetus.description.et
  ),

  knr_id: createData(
    { name: etak_kirjeldus.classes._default.fields.knr_id.name, color: RegisterColor },
    "täisarv",
    "",
    etak_kirjeldus.classes._default.fields.knr_id.description.et
  ),

  kpo_seos: createData(
    { name: "kpo_seos", color: RegisterColor },
    "lühike täisarv",
    "seisuveekogu_kpo",
    "Seisuveekogu roll KPO ISs"
  ),

  mps_id: createData(
    { name: etak_kirjeldus.classes._default.fields.mps_id.name, color: RegisterColor },
    "tekst(17)",
    "",
    etak_kirjeldus.classes._default.fields.mps_id.description.et
  ),

  ehr_gid: createData(
    { name: etak_kirjeldus.classes._default.fields.ehr_gid.name, color: RegisterColor },
    "tekst(20)",
    "",
    etak_kirjeldus.classes._default.fields.ehr_gid.description.et
  ),

  ads_oid: createData(
    { name: etak_kirjeldus.classes._default.fields.ads_oid.name, color: RegisterColor },
    "tekst(10)",
    "",
    etak_kirjeldus.classes._default.fields.ads_oid.description.et
  ),

  ads_lahiaadress: createData(
    { name: etak_kirjeldus.classes._default.fields.ads_lahiaadress.name, color: RegisterColor },
    "tekst(255)",
    "",
    etak_kirjeldus.classes._default.fields.ads_lahiaadress.description.et
  ),

  kov_id: createData(
    { name: etak_kirjeldus.classes._default.fields.kov_id.name, color: RegisterColor },
    "täisarv",
    "",
    etak_kirjeldus.classes._default.fields.kov_id.description.et
  ),

  mark: createData(
    { name: etak_kirjeldus.classes._default.fields.mark.name, color: RegisterColor },
    "lühike täisarv",
    "toevaartus",
    etak_kirjeldus.classes._default.fields.mark.description.et
  ),
};

export const mainRows = [
  createData(
    { name: etak_kirjeldus.classes._default.fields.etak_id.name, color: MainElementColor },
    "täisarv",
    "",
    etak_kirjeldus.classes._default.fields.etak_id.description.et
  ),

  createData(
    { name: etak_kirjeldus.classes._default.fields.markused.name, color: MainElementColor },
    "tekst(255)",
    "",
    etak_kirjeldus.classes._default.fields.markused.description.et
  ),

  createData(
    { name: etak_kirjeldus.classes._default.fields.objectid.name, color: EsriElementColor },
    "täisarv",
    "",
    etak_kirjeldus.classes._default.fields.objectid.description.et
  ),
  createData(
    { name: etak_kirjeldus.classes._default.fields.shape.name, color: EsriElementColor },
    "geomeetria",
    "",
    etak_kirjeldus.classes._default.fields.shape.description.et
  ),

  createData(
    { name: etak_kirjeldus.classes._default.fields.muutmisaeg.name, color: EtakMetaColor },
    "kuupäev",
    "",
    etak_kirjeldus.classes._default.fields.muutmisaeg.description.et
  ),
  createData(
    { name: etak_kirjeldus.classes._default.fields.andmeallika_id.name, color: EtakMetaColor },
    "täisarv",
    "",
    etak_kirjeldus.classes._default.fields.andmeallika_id.description.et
  ),
  createData(
    { name: etak_kirjeldus.classes._default.fields.korgusallika_id.name, color: EtakMetaColor },
    "täisarv",
    "",
    etak_kirjeldus.classes._default.fields.korgusallika_id.description.et
  ),
  createData(
    { name: etak_kirjeldus.classes._default.fields.ruumikujuallika_id.name, color: EtakMetaColor },
    "täisarv",
    "",
    etak_kirjeldus.classes._default.fields.ruumikujuallika_id.description.et
  ),
  createData(
    { name: etak_kirjeldus.classes._default.fields.vajalik.name, color: EtakMetaColor },
    "lühike täisarv",
    "vajalikkus",
    etak_kirjeldus.classes._default.fields.vajalik.description.et
  ),
  createData(
    { name: etak_kirjeldus.classes._default.fields.geom_muutmisaeg.name, color: EtakMetaColor },
    "kuupäev",
    "",
    etak_kirjeldus.classes._default.fields.geom_muutmisaeg.description.et
  ),
];

export const generateKood = (domain: string) => {
  const koodField = {
    row: createData(
      { name:  etak_kirjeldus.classes._default.fields.kood.name, color: MainElementColor },
      "lühike täisarv",
      domain,
      etak_kirjeldus.classes._default.fields.kood.description.et
    ),
    position: 1,
  };

  return koodField;
};

export const generateTyyp = (domain: string, desc: string) => {
  const tyypField = {
    row: createData(
      { name: "tyyp", color: MainElementColor },
      "lühike täisarv",
      domain,
      desc
    ),
    position: 2,
  };

  return tyypField;
};

export const generateKorgus = (desc: string, position: number) => {
  const korgusField = {
    row: createData(
      { name: "korgus", color: MainElementColor },
      "lühike täisarv",
      "",
      desc
    ),
    position,
  };

  return korgusField;
};

export const generateField = (row: RowData, position: number) => {
  const field = {
    row,
    position,
  };

  return field;
};

export const generateHeadingData = (
  geomType: string,
  estName: string,
  geomDimension: number = 2.5
) => {
  const heading = {
    geomType,
    geomDimension,
    estName,
  };

  return heading;
};


