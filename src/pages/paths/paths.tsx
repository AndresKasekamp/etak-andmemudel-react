import { generateFeatureClass } from "../../data/featureClasses";
import App from "../../App";
import { FullDataTable } from "../../components/FullDataTable";
import { OnePagerForData } from "../../components/AllDataInOnePage";
import { FeatureClassPath } from "../../interfaces/interfaces";

import { FeatureClassOutput } from "../../interfaces/interfaces";
import Derivatives from "../Derivatives";
import ThreeD from "../ThreeD";
import AboutPage from "../About";

import {
  threeDPath as path3d,
  derivedPathMany,
  aboutPath as pathAbout,
  levituumPath,
} from "./groupPaths";

const allLevituumDataTogether = [
  ...generateFeatureClass().metaandmed,
  ...generateFeatureClass().punktobjektid,
  ...generateFeatureClass().joonobjektid,
  ...generateFeatureClass().pindobjektidOverlap,
  ...generateFeatureClass().pindobjektid,
];

const allTuletiskihidTogether = [
  ...generateFeatureClass().tuletiskihidLines,
  ...generateFeatureClass().tuletiskihidPolygons,
];

const all3dTogether = [
  ...generateFeatureClass().lod2,
  ...generateFeatureClass().lod1,
  ...generateFeatureClass().lod0,
];

const generateAllDataMerge = (combinedData: FeatureClassOutput[]) => {
  return combinedData.sort((a, b) => a.fcName.localeCompare(b.fcName));
};

const initPath = {
  path: "",
  element: <App />,
};

const allLevituumPath = {
  path: `${levituumPath}/all`,
  element: (
    <OnePagerForData
      allTablesAndDomains={generateAllDataMerge(allLevituumDataTogether)}
    />
  ),
};

const allDerivativePath = {
  path: `${derivedPathMany}/all`,
  element: (
    <OnePagerForData
      allTablesAndDomains={generateAllDataMerge(allTuletiskihidTogether)}
    />
  ),
};

const all3DPath = {
  path: `${path3d}/all`,
  element: (
    <OnePagerForData
      allTablesAndDomains={generateAllDataMerge(all3dTogether)}
    />
  ),
};

const derivativePath = {
  path: derivedPathMany,
  element: <Derivatives />,
};

const threeDPath = {
  path: path3d,
  element: <ThreeD />,
};

const aboutPath = {
  path: pathAbout,
  element: <AboutPage />,
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

const featureClassTuletiskiht = (
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

const featureClassPath3D = (
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
  allLevituumPath,
  allDerivativePath,
  all3DPath,
  derivativePath,
  threeDPath,
  aboutPath,
  ...featureClassPath(generateFeatureClass().punktobjektid),
  ...featureClassPath(generateFeatureClass().joonobjektid),
  ...featureClassPath(generateFeatureClass().pindobjektidOverlap),
  ...featureClassPath(generateFeatureClass().pindobjektid),
  ...featureClassPath(generateFeatureClass().metaandmed),
  ...featureClassTuletiskiht(generateFeatureClass().tuletiskihidLines),
  ...featureClassTuletiskiht(generateFeatureClass().tuletiskihidPolygons),
  ...featureClassPath3D(generateFeatureClass().lod2),
  ...featureClassPath3D(generateFeatureClass().lod1),
  ...featureClassPath3D(generateFeatureClass().lod0),
];
