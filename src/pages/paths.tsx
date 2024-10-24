import { generateFeatureClass } from "../data/featureClasses";
import App from "../App";
import { FullDataTable } from "../components/FullDataTable";
import { OnePager2d } from "../components/OnePager2d";
import { FeatureClassPath } from "../interfaces/interfaces";

import { FeatureClassOutput } from "../interfaces/interfaces";

const generateAllDataMerge = () => {
  const allDataTogether = [
    // ...metadata,
    ...generateFeatureClass().punktobjektid,
    ...generateFeatureClass().joonobjektid,
    ...generateFeatureClass().pindobjektidOverlap,
    ...generateFeatureClass().pindobjektid,
    // ...derivedLayers,
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
  featureclasses: FeatureClassOutput[]
): FeatureClassPath[] => {
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `${fc.groupName}/${fc.fcName}`,
    element: (
      <FullDataTable
        fcName={fc.fcName}
        groupName={fc.groupName}
        elements={fc.elements}
        domainTables={fc.domainTables}
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
  // ...featureClassPath(metadata),
  // ...featureClassPath(derivedLayers),
];
