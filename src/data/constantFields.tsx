import { Name } from "../types/types";
import { RowData } from "../types/interfaces";

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
      { name: "st_area(shape)", color: "#DAD0ED" },
      "reaalarv",
      "",
      "Ruumikuju pindala"
    ),

    "st_length(shape)": createData(
      { name: "st_length(shape)", color: "#DAD0ED" },
      "reaalarv",
      "",
      "Ruumikuju pikkus"
    ),
  },
];

// TODO välja arvatud sõidutee osa
export const otherRegisterSources = {
  kmr_id: createData(
    { name: "kmr_id", color: "#C1E1C1" },
    "täisarv",
    "",
    "Objekti identifikaator Kultuurimälestiste riiklikus registris"
  ),

  kkr_kood: createData(
    { name: "kkr_kood", color: "#C1E1C1" },
    "tekst(30)",
    "",
    "Objekti kood Keskkonnaregistris"
  ),

  nimetus: createData(
    { name: "nimetus", color: "#C1E1C1" },
    "tekst(255)",
    "",
    "Objekti nimetus Riigi kohanimeregistris"
  ),

  knr_id: createData(
    { name: "knr_id", color: "#C1E1C1" },
    "täisarv",
    "",
    "Objekti identifikaator Riigi kohanimeregistris"
  ),

  kpo_seos: createData(
    { name: "kpo_seos", color: "#C1E1C1" },
    "lühike täisarv",
    "seisuveekogu_kpo",
    "Seisuveekogu roll KPO ISs"
  ),

  mps_id: createData(
    { name: "mps_id", color: "#C1E1C1" },
    "tekst(17)",
    "",
    "Objekti kood Maaparandussüsteemide registris"
  ),

  ehr_gid: createData(
    { name: "ehr_gid", color: "#C1E1C1" },
    "tekst(20)",
    "",
    "Ehitise osa geomeetria identifikaator Riiklikus ehitisregistris"
  ),

  ads_oid: createData(
    { name: "ads_oid", color: "#C1E1C1" },
    "tekst(10)",
    "",
    "Aadressiobjekti identifikaator Aadressiandmete süsteemis"
  ),

  ads_lahiaadress: createData(
    { name: "ads_lahiaadress", color: "#C1E1C1" },
    "tekst(255)",
    "",
    "Objekti lähiaadress Aadressiandmete süsteemis"
  ),

  kov_id: createData(
    { name: "kov_id", color: "#C1E1C1" },
    "täisarv",
    "",
    "Kohaliku omavalitsuse andmekogu ruumiobjekti identifikaator"
  ),

  mark: createData(
    { name: "mark", color: "#C1E1C1" },
    "lühike täisarv",
    "toevaartus",
    "Objekt on kasutusel navigatioonimärgina"
  ),
};

export const mainRows = [
  createData(
    { name: "etak_id", color: "#FFFFFF" },
    "täisarv",
    "",
    "ETAK objekti unikaalne identifikaator"
  ),

  createData(
    { name: "markused", color: "#FFFFFF" },
    "tekst(255)",
    "",
    "Vabas vormis märkused objekti kohta"
  ),

  createData(
    { name: "objectid", color: "#DAD0ED" },
    "täisarv",
    "",
    "Tehniline identifikaator"
  ),
  createData(
    { name: "shape", color: "#DAD0ED" },
    "geomeetria",
    "",
    "Objekti ruumikuju"
  ),

  createData(
    { name: "muutmisaeg", color: "#f4c1c1" },
    "kuupäev",
    "",
    "Operaatori poolt tehtud viimase muutuse aeg"
  ),
  createData(
    { name: "andmeallika_id", color: "#f4c1c1" },
    "täisarv",
    "",
    "Objekti andmete muutmist põhjustanud alusdokumendi identifikaator"
  ),
  createData(
    { name: "korgusallika_id", color: "#f4c1c1" },
    "täisarv",
    "",
    "Alusdokumendi identifikaator, mille järgi on omistatud objekti kõrgus"
  ),
  createData(
    { name: "ruumikujuallika_id", color: "#f4c1c1" },
    "täisarv",
    "",
    "Ruumikuju muutmise aluseks olnud alusdokumendi identifikaator"
  ),
  createData(
    { name: "vajalik", color: "#f4c1c1" },
    "lühike täisarv",
    "vajalikkus",
    "Objekti staatus"
  ),
  createData(
    { name: "geom_muutmisaeg", color: "#f4c1c1" },
    "kuupäev",
    "",
    "Operaatori poolt tehtud viimase ruumikuju muutuse aeg"
  ),
];

export const generateKood = (domain: string) => {
  const koodField = {
    row: createData(
      { name: "kood", color: "#FFFFFF" },
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
      { name: "tyyp", color: "#FFFFFF" },
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
      { name: "korgus", color: "#FFFFFF" },
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


