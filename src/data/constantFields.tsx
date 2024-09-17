import { Name } from "../types/types";
import { RowData } from "../types/interfaces";
import { White, LavenderBlue, PastelPink, PastelGreen } from "./colors";

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
    "st_area(shape)": createData(
      { name: "st_area(shape)", color: LavenderBlue },
      "reaalarv",
      "",
      "Ruumikuju pindala"
    ),

    "st_length(shape)": createData(
      { name: "st_length(shape)", color: LavenderBlue },
      "reaalarv",
      "",
      "Ruumikuju pikkus"
    ),
  },
];

// TODO välja arvatud sõidutee osa
export const otherRegisterSources = {
  kmr_id: createData(
    { name: "kmr_id", color: PastelGreen },
    "täisarv",
    "",
    "Objekti identifikaator Kultuurimälestiste riiklikus registris"
  ),

  kkr_kood: createData(
    { name: "kkr_kood", color: PastelGreen },
    "tekst(30)",
    "",
    "Objekti kood Keskkonnaregistris"
  ),

  nimetus: createData(
    { name: "nimetus", color: PastelGreen },
    "tekst(255)",
    "",
    "Objekti nimetus Riigi kohanimeregistris"
  ),

  knr_id: createData(
    { name: "knr_id", color: PastelGreen },
    "täisarv",
    "",
    "Objekti identifikaator Riigi kohanimeregistris"
  ),

  kpo_seos: createData(
    { name: "kpo_seos", color: PastelGreen },
    "lühike täisarv",
    "seisuveekogu_kpo",
    "Seisuveekogu roll KPO ISs"
  ),

  mps_id: createData(
    { name: "mps_id", color: PastelGreen },
    "tekst(17)",
    "",
    "Objekti kood Maaparandussüsteemide registris"
  ),

  ehr_gid: createData(
    { name: "ehr_gid", color: PastelGreen },
    "tekst(20)",
    "",
    "Ehitise osa geomeetria identifikaator Riiklikus ehitisregistris"
  ),

  ads_oid: createData(
    { name: "ads_oid", color: PastelGreen },
    "tekst(10)",
    "",
    "Aadressiobjekti identifikaator Aadressiandmete süsteemis"
  ),

  ads_lahiaadress: createData(
    { name: "ads_lahiaadress", color: PastelGreen },
    "tekst(255)",
    "",
    "Objekti lähiaadress Aadressiandmete süsteemis"
  ),

  kov_id: createData(
    { name: "kov_id", color: PastelGreen },
    "täisarv",
    "",
    "Kohaliku omavalitsuse andmekogu ruumiobjekti identifikaator"
  ),

  mark: createData(
    { name: "mark", color: PastelGreen },
    "lühike täisarv",
    "toevaartus",
    "Objekt on kasutusel navigatioonimärgina"
  ),
};

export const mainRows = [
  createData(
    { name: "etak_id", color: White },
    "täisarv",
    "",
    "ETAK objekti unikaalne identifikaator"
  ),

  createData(
    { name: "markused", color: White },
    "tekst(255)",
    "",
    "Vabas vormis märkused objekti kohta"
  ),

  createData(
    { name: "objectid", color: LavenderBlue },
    "täisarv",
    "",
    "Tehniline identifikaator"
  ),
  createData(
    { name: "shape", color: LavenderBlue },
    "geomeetria",
    "",
    "Objekti ruumikuju"
  ),

  createData(
    { name: "muutmisaeg", color: PastelPink },
    "kuupäev",
    "",
    "Operaatori poolt tehtud viimase muutuse aeg"
  ),
  createData(
    { name: "andmeallika_id", color: PastelPink },
    "täisarv",
    "",
    "Objekti andmete muutmist põhjustanud alusdokumendi identifikaator"
  ),
  createData(
    { name: "korgusallika_id", color: PastelPink },
    "täisarv",
    "",
    "Alusdokumendi identifikaator, mille järgi on omistatud objekti kõrgus"
  ),
  createData(
    { name: "ruumikujuallika_id", color: PastelPink },
    "täisarv",
    "",
    "Ruumikuju muutmise aluseks olnud alusdokumendi identifikaator"
  ),
  createData(
    { name: "vajalik", color: PastelPink },
    "lühike täisarv",
    "vajalikkus",
    "Objekti staatus"
  ),
  createData(
    { name: "geom_muutmisaeg", color: PastelPink },
    "kuupäev",
    "",
    "Operaatori poolt tehtud viimase ruumikuju muutuse aeg"
  ),
];

export const generateKood = (domain: string) => {
  const koodField = {
    row: createData(
      { name: "kood", color: White },
      "lühike täisarv",
      domain,
      "Nähtuse kood ETAK reaalsusmudelis"
    ),
    position: 1,
  };

  return koodField;
};

export const generateTyyp = (domain: string, desc: string) => {
  const tyypField = {
    row: createData(
      { name: "tyyp", color: White },
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
      { name: "korgus", color: White },
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


