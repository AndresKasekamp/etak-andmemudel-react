import {
  RowData,
  DescRowData,
  ElementNameCategory,
} from "../interfaces/interfaces";

export const orderOfRows = ["general", "technical", "meta", "register"];

// TODO create data objektis row, position - postion ära kaotada
export const createData = (
  name: ElementNameCategory,
  dataType: string,
  domain: string,
  desc: DescRowData
): RowData => {
  return { name, dataType, domain, desc };
};
