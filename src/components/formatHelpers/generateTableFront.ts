import {
  etakMainCategoryFields,
  etakMetaCategoryFields,
  esriCategoryFields,
} from "../../data/constantFields.tsx";
import {
  Elements,
  HeadingData,
  FeatureClass,
} from "../../interfaces/interfaces.tsx";

import { POINT_GEOMETRY, LINE_GEOMETRY } from "../../data/dataTypes.ts";


// TODO kogu seda jama pole ilmselt vaja, kui fieldist lugemist tööle saan
export const generateTableFront = (
  headingData: HeadingData,
  addedRows: Elements
) => {
  const { etak, register } = addedRows;
  const etakRows = etak.map((row) => row.row);
  const registerRows = register.map((row) => row.row);
  // TODO siin on vaja probleeme lahendada skaleeruvusega (esimene blokk)
  if (headingData.estName === "Alusdokument") {
    return etakRows;
  } else if (
    headingData.estName ===
    "Vooluvete tervikkujud (põhiteljed) Eesti looduse infosüsteemis"
  ) {
    return [...etakRows, ...registerRows];
  }
  const { shape_Length, shape_Area } = esriCategoryFields;

  const etakFields = Object.values(etakMainCategoryFields);
  const esriFields = [
    ...Object.values(esriCategoryFields),
    ...Object.values(etakMetaCategoryFields),
  ];

  let updatedRows = [...etakFields, ...etakRows, ...esriFields];

  // TODO siin on vaja probleeme lahendada skaleeruvusega (teine blokk)
  if (headingData.geomType === POINT_GEOMETRY) {
    const notPointShapeFields = [shape_Length.name.name, shape_Area.name.name];
    updatedRows = updatedRows.filter(
      (row) => !notPointShapeFields.includes(row.name.name)
    );
  } else if (headingData.geomType === LINE_GEOMETRY) {
    const notJoonShapeFields = [shape_Area.name.name];
    updatedRows = updatedRows.filter(
      (row) => !notJoonShapeFields.includes(row.name.name)
    );
  }

  updatedRows = [...updatedRows, ...registerRows];

  return updatedRows;
};

export const generateDomainsTogether = (
  allTablesAndDomains: FeatureClass[]
) => {
  // Manipulating domains into singular
  const domainsMergedSet = new Set(
    allTablesAndDomains.map((obj) => obj.domainTables).flat()
  );

  const domainsMerged = [...domainsMergedSet];
  domainsMerged.sort((a, b) => a.name.localeCompare(b.name));

  return domainsMerged;
};
