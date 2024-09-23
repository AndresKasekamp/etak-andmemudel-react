import {
  etakMainCategoryFields,
  etakMetaCategoryFields,
  esriCategoryFields,
} from "../../data/constantFields.tsx";
import { Elements, HeadingData } from "../../interfaces/interfaces.tsx";

import { POINT_GEOMETRY } from "../../data/dataTypes.ts";

export const generateTableFront = (
  headingData: HeadingData,
  addedRows: Elements
) => {
  const { etak, register } = addedRows;
  const etakRows = etak.map((row) => row.row);
  const registerRows = register.map((row) => row.row);
  // TODO siin on vaja probleeme lahendada skaleeruvusega
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

  if (headingData.geomType === POINT_GEOMETRY) {
    const notPointShapeFields = [shape_Length.name.name, shape_Area.name.name];
    updatedRows = updatedRows.filter(
      (row) => !notPointShapeFields.includes(row.name.name)
    );
  }

  updatedRows = [...updatedRows, ...registerRows];

  return updatedRows;
};
