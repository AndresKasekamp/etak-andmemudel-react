import { ObjectCountResponse } from "../interfaces/interfaces";

export const generateWfsUrl = (
  name: string,
  derived: boolean = false
): string => {
  if (derived) {
    return `https://gsavalik.envir.ee/geoserver/etak_tuletis/wfs?typename=etak_tuletis:${name.toLowerCase()}&service=wfs&srs=EPSG:3301&request=getfeature&outputformat=json`;
  }
  return `https://gsavalik.envir.ee/geoserver/wfs?typename=etak:${name.toLowerCase()}&service=wfs&srs=EPSG:3301&request=getfeature&outputformat=json`;
};

export async function getObjectCount(
  url: string
): Promise<ObjectCountResponse> {
  try {
    // Perform the API request
    const response = await fetch(url);

    // Check if the response is OK (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data: ObjectCountResponse = await response.json();

    return data;
  } catch (error) {
    // Handle errors, such as network issues or JSON parsing errors
    console.error("Failed to fetch data:", error);

    throw error;
  }
}
