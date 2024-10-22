import {
  etakJoonobjektid,
  etakPindobjektidMain,
  etakPindobjektidOverlap,
  etakPunktobjektid,
  metadata,
  derivedLayers,
  generateFeatureClass,
} from "../data/featureClasses";
import App from "../App";
import { FullDataTable } from "../components/FullDataTable";
import { FeatureClass, FeatureClassPath } from "../interfaces/interfaces";
import { OnePager2d } from "../components/OnePager2d";

const generateAllDataMerge = () => {
  const allDataTogether = [
    ...metadata,
    ...etakPunktobjektid,
    ...etakJoonobjektid,
    ...etakPindobjektidOverlap,
    ...etakPindobjektidMain,
    ...derivedLayers,
  ];

  return allDataTogether.sort((a, b) => a.fcName.localeCompare(b.fcName));
};

const initPath = {
  path: "/",
  element: <App />,
};

const all2dPath = {
  path: "/all/2d",
  element: <OnePager2d allTablesAndDomains={generateAllDataMerge()} />,
};

const featureClassPath = (
  featureclasses: FeatureClass[]
): FeatureClassPath[] => {
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `${fc.groupName}/${fc.fcName}`,
    element: (
      <FullDataTable
        name={fc.fcName}
        group={fc.groupName}
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
  ...featureClassPath(generateFeatureClass().punktobjektid),
  ...featureClassPath(generateFeatureClass().joonobjektid),
  ...featureClassPath(generateFeatureClass().pindobjektidOverlap),
  ...featureClassPath(generateFeatureClass().pindobjektid),
  ...featureClassPath(metadata),
  ...featureClassPath(derivedLayers),
];
