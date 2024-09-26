import {
  etakJoonobjektid,
  // etakPindobjektidMain,
  // etakPindobjektidOverlap,
  etakPunktobjektid,
  metadata,
  derivedLayers,
} from "../data/featureClasses";
import App from "../App";
import { FullDataTable } from "../components/FullDataTable";
import { FeatureClass, FeatureClassPath } from "../interfaces/interfaces";
import { OnePager2d } from "../components/OnePager2d";

const allDataTogether = [
  ...metadata,
  ...etakPunktobjektid,
  ...derivedLayers,
  ...etakJoonobjektid,
];

const initPath = {
  path: "/",
  element: <App />,
};

const all2dPath = {
  path: "/all/2d",
  element: <OnePager2d allTablesAndDomains={allDataTogether} />,
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
  ...featureClassPath(etakPunktobjektid),
  ...featureClassPath(etakJoonobjektid),
  ...featureClassPath(metadata),
  ...featureClassPath(derivedLayers),
  // ...featureClassPath(etakJoonobjektid, "joonobjekt"),
  // ...featureClassPath(etakPindobjektidOverlap, "pindobjekt"),
  // ...featureClassPath(etakPindobjektidMain, "pindobjekt"),
];
