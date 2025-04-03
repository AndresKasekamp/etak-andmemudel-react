import { orderOfRows } from "../data/orderOfRows";
import { Field } from "../interfaces/interfaces";

export const sortElements = (elements: Field[]): Field[] => {
  return elements.sort((a, b) => {
    return orderOfRows.indexOf(a.meta_type) - orderOfRows.indexOf(b.meta_type);
  });
};
