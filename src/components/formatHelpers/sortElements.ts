import { orderOfRows } from "../../data/constantFields";

export const sortElements = (elements) => {
  const sortedElements = elements.sort((a, b) => {
    return orderOfRows.indexOf(a.meta_type) - orderOfRows.indexOf(b.meta_type);
  });

  return sortedElements;
};
