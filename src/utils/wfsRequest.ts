import { ObjectCountResponse } from "../types/interfaces";

export async function getObjectCount(url: string): Promise<void> {
  try {
    // Perform the API request
    const response = await fetch(url);

    // Check if the response is OK (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data: ObjectCountResponse = await response.json();

    // @ts-ignore
    return data;
  } catch (error) {
    // Handle errors, such as network issues or JSON parsing errors
    console.error("Error fetching data:", error);
  }
}
