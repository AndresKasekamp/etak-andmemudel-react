import { generateFeatureClass } from "../data/featureClasses";
import App from "../App";
import { FullDataTable } from "../components/FullDataTable";
import { OnePager2d } from "../components/OnePager2d";
import { FeatureClassPath } from "../interfaces/interfaces";

import { FeatureClassOutput } from "../interfaces/interfaces";
import Derivatives from "./Derivatives";
import ThreeD from "./ThreeD";

const generateAllDataMerge = () => {
  const allDataTogether = [
    ...generateFeatureClass().metaandmed,
    ...generateFeatureClass().punktobjektid,
    ...generateFeatureClass().joonobjektid,
    ...generateFeatureClass().pindobjektidOverlap,
    ...generateFeatureClass().pindobjektid,
    // ...generateFeatureClass().tuletiskihid,
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

const derivativePath = {
  path: "/tuletiskihid",
  element: <Derivatives />,
};

const threeDPath = {
  path: "/3d",
  element: <ThreeD />,
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

// TODO tuletiskihtide tüübid on ka vaja välja selgitada
const featureClassPath2 = (
  featureclasses: FeatureClassOutput[]
): FeatureClassPath[] => {
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `tuletiskihid/${fc.groupName}/${fc.fcName}`,
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

const featureClassPath3 = (
  featureclasses: FeatureClassOutput[]
): FeatureClassPath[] => {
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `3d/${fc.groupName}/${fc.fcName}`,
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
  derivativePath,
  threeDPath,
  ...featureClassPath(generateFeatureClass().punktobjektid),
  ...featureClassPath(generateFeatureClass().joonobjektid),
  ...featureClassPath(generateFeatureClass().pindobjektidOverlap),
  ...featureClassPath(generateFeatureClass().pindobjektid),
  ...featureClassPath(generateFeatureClass().metaandmed),
  ...featureClassPath2(generateFeatureClass().tuletiskihid),
  ...featureClassPath3(generateFeatureClass().kolmD),
];
