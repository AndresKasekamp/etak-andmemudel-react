import {
  // etakJoonobjektid,
  // etakPindobjektidMain,
  // etakPindobjektidOverlap,
  etakPunktobjektid,
  metadata,
  derivedLayers,
} from "../data/featureClasses";
import App from "../App";
import { FullDataTable } from "../components/FullDataTable";
import { FeatureClass, FeatureClassPath } from "../interfaces/interfaces";
import { pointPath, metadataPath, derivedPath } from "./groupPaths";
import { OnePager2d } from "../components/OnePager2d";

const allDataTogether = [...etakPunktobjektid, ...metadata, ...derivedLayers];

const initPath = {
  path: "/",
  element: <App />,
};

const all2dPath = {
  path: "/all/2d",
  element: <OnePager2d allTablesAndDomains={allDataTogether} />,
};

const featureClassPath = (
  featureclasses: FeatureClass[],
  dataTypeClass: string
): FeatureClassPath[] => {
  console.log("ETAK Punktobjektid", featureclasses);
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `${dataTypeClass}/${fc.fcName}`,
    element: (
      <FullDataTable
        name={fc.fcName}
        rows={fc.elements}
        domains={fc.domainTables}
        headingData={fc.headingData}
      />
    ),
  }));

  return featureclassPaths;
};

export const paths = () => [
  initPath,
  all2dPath,
  ...featureClassPath(etakPunktobjektid, pointPath),
  ...featureClassPath(metadata, metadataPath),
  ...featureClassPath(derivedLayers, derivedPath),
  // ...featureClassPath(etakJoonobjektid, "joonobjekt"),
  // ...featureClassPath(etakPindobjektidOverlap, "pindobjekt"),
  // ...featureClassPath(etakPindobjektidMain, "pindobjekt"),
];
