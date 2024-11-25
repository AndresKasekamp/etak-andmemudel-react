import { Location } from "react-router-dom";

export const getTableName = (location: Location): string => {
  // Remove the leading slash
  const currentEndpoint = location.pathname.startsWith("/")
    ? location.pathname.split("/").pop()
    : location.pathname;

  return currentEndpoint || "";
};


export const threeDreplacemnt = () => {
  
}