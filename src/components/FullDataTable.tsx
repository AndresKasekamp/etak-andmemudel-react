import { useLocation, Location } from "react-router-dom";

import {
  etakMainCategoryFields,
  esriMetaCategoryFields,
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

const generateTableFront = (headingData: HeadingData, addedRows: Elements) => {
  const { etak, register } = addedRows;
  const { shape_Length, shape_Area } = esriCategoryFields;

  // Step 1: Gather all fields into arrays
  const etakFields = Object.values(etakMainCategoryFields);
  const esriFields = [
    ...Object.values(esriCategoryFields),
    ...Object.values(esriMetaCategoryFields),
  ];

  // Step 2: Add etak and register rows to fields
  const etakRows = etak.map((row) => row.row);
  const registerRows = register.map((row) => row.row);

  // Step 3: Combine everything together
  let updatedRows = [...etakFields, ...etakRows, ...esriFields];

  // Step 4: Filter out non-point shape fields if the geomType is 'punkt'
  if (headingData.geomType === "punkt") {
    const notPointShapeFields = [shape_Length.name.name, shape_Area.name.name];
    updatedRows = updatedRows.filter(
      (row) => !notPointShapeFields.includes(row.name.name)
    );
  }

  // Step 5: Add register rows after filtering
  updatedRows = [...updatedRows, ...registerRows];

  return updatedRows;
};

// let updatedRows = [];

// if (tableName === etak_kirjeldus.classes.alusdokument.name) {
//   updatedRows = [];
// }
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
