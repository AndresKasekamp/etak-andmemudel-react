import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

import { getObjectCount } from "../../utils/wfsRequest.ts";

import {
  ObjectCountResponse,
  ObjectCountProps,
} from "../../interfaces/interfaces.tsx";
import LoadingSpinner from "./LoadingSpinner.tsx";

import { todayDate } from "../../utils/utils.ts";

const ObjectCount = ({ url, hardcodedCount }: ObjectCountProps) => {
  const [data, setData] = useState<number | null>(null); // Use number or null
  const [loading, setLoading] = useState<boolean>(true);
  // @ts-ignore
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        // @ts-ignore
        const result: ObjectCountResponse = await getObjectCount(url);
        setData(result["totalFeatures"]); // Adjust based on actual response structure
        setLoading(false);
      } catch (err) {
        setError("Päring ebaõnnestus");
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [url]); // Empty dependency array means this effect runs once when the component mounts

  // if (loading) return <Typography>Laen...</Typography>;
  if (loading) return <LoadingSpinner wfsData={true} />;
  // if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Typography>
      {data !== null ? (
        <>
          {data}{" "}
          <span style={{ fontSize: "0.8em", color: "gray" }}>
            ({todayDate()})
          </span>
        </>
      ) : (
        <>
          {hardcodedCount}{" "}
          <span style={{ fontSize: "0.8em", color: "gray" }}>
            ({__BUILD_DATE__})
          </span>
        </>
      )}
    </Typography>
  );
};

export default ObjectCount;
