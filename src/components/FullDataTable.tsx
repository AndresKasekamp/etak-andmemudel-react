import { useLocation, Location } from "react-router-dom";

import {
  etakMainCategoryFields,
  etakMetaCategoryFields,
  esriCategoryFields,
} from "../data/constantFields.tsx";
import { getTableName } from "../utils/utils.tsx";
import {
  EtakTableProps,
  Elements,
  HeadingData,
} from "../interfaces/interfaces.tsx";

import { FieldsTable } from "./FieldsTable.tsx";

import { DomainTableMain } from "./domains/DomainTableMain.tsx";
import { POINT_GEOMETRY } from "../data/dataTypes.ts";

//import etak_kirjeldus from "../data/etak_kirjeldus.json" assert { type: "json" };

const generateTableFront = (headingData: HeadingData, addedRows: Elements) => {

  // TODO ürita rows lahti saada (enam pole vaja)
  const { etak, register } = addedRows;
  const etakRows = etak.map((row) => row.row);
  if (headingData.estName === "Alusdokument") {
    return etakRows
  }
  const { shape_Length, shape_Area } = esriCategoryFields;

  const etakFields = Object.values(etakMainCategoryFields);
  const esriFields = [
    ...Object.values(esriCategoryFields),
    ...Object.values(etakMetaCategoryFields),
  ];

  // const etakRows = etak.map((row) => row.row);
  const registerRows = register.map((row) => row.row);

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

export const FullDataTable = ({
  addedRows,
  imageSrc,
  associatedDomains,
  headingData,
}: EtakTableProps) => {
  const location: Location = useLocation();

  const tableName = getTableName(location);

  const updatedRows = generateTableFront(headingData, addedRows);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <FieldsTable
        updatedRows={updatedRows}
        imageSrc={imageSrc}
        tableName={tableName}
        headingData={headingData}
      ></FieldsTable>

      <DomainTableMain associatedDomains={associatedDomains}></DomainTableMain>
    </div>
  );
};
