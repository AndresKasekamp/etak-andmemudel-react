import { orderOfRows } from "../../data/constantFields";
import { Field } from "../../interfaces/interfaces2";

export const sortElements = (elements: Field[]): Field[] => {
  const sortedElements = elements.sort((a, b) => {
    return orderOfRows.indexOf(a.meta_type) - orderOfRows.indexOf(b.meta_type);
  });

  return sortedElements;
};
