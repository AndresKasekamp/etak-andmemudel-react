import { FileFormat } from "../helpers/FileFormat.tsx";

import ObjectCount from "../helpers/ObjectCount.tsx";
import { LocationFormats } from "../../interfaces/interfaces.tsx";

import ButtonGroup from "@mui/material/ButtonGroup";

import { generateWfsUrl } from "../../utils/wfsRequest.ts";

import { HeadingData } from "../../interfaces/interfaces.tsx";

import { derivedPathMany, threeDPath } from "../../pages/paths/groupPaths.ts";

import { useTranslation } from "react-i18next";

export const getFileFormats = (
  locationPathName: string,
  pathNameEnd: string
): JSX.Element | null => {
  const formatsByLocation: LocationFormats = {
    tuletiskihid: ["WFS", "SHP", "TAB", "GPKG"],
    "3d": ["GDB", "CityGML", "OBJ"],
    "3dLod0": ["GDB", "GPKG"],
    default: ["WFS", "SHP", "GDB", "TAB", "GPKG", "DGN", "DWG"],
  };

  if (pathNameEnd === "all") {
    return null;
  }

  let formats;
  if (["yksikpuud_keskpunkt", "yksikpuud_puukroon"].includes(pathNameEnd)) {
    formats = formatsByLocation["3dLod0"];
  } else {
    formats = formatsByLocation[locationPathName] || formatsByLocation.default;
  }

  return (
    <ButtonGroup
      color="secondary"
      variant="outlined"
      size="small"
      sx={{ marginRight: 1, marginBottom: 1 }}
    >
      {formats.map((format, index) => (
        <FileFormat key={index} format={format} />
      ))}
    </ButtonGroup>
  );
};

export const getFeatureCount = (
  locationPathName: string,
  fcName: string,
  headingData: HeadingData
) => {
  switch (locationPathName) {
    case "tuletiskihid":
      return (
        <ObjectCount
          url={generateWfsUrl(fcName, true)}
          hardcodedCount={headingData.count}
        ></ObjectCount>
      );
    default:
      return (
        <ObjectCount
          url={generateWfsUrl(fcName)}
          hardcodedCount={headingData.count}
        ></ObjectCount>
      );
  }
};

export const isLevituum = (locationPathName: string) => {
  const { t } = useTranslation();

  const extraLayers = [derivedPathMany, threeDPath];
  return `${t("dataFrom")}: ${
    extraLayers.includes(locationPathName) ? locationPathName : "levituum"
  }`;
};
