import { Location } from "react-router-dom";

export const getTableName = (location: Location): string[] => {
  // Remove the leading slash
  const currentEndpoint = location.pathname.startsWith("/")
    ? location.pathname.split("/").pop()
    : location.pathname;

  // This will retrieve either tuletiskihid or 3d
  const locationPathName = location.pathname.split("/")[2];

  return [currentEndpoint || "", locationPathName];
};

export const threeDreplacemnt = () => {};

export const todayDate = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = currentDate.getFullYear();

  return `${day}.${month}.${year}`;
};
