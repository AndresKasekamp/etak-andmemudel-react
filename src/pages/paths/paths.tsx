import { generateFeatureClass } from "../../data/featureClasses";
import App from "../../App";
import { FullDataTable } from "../../components/FullDataTable";
import { OnePagerForData } from "../../components/AllDataInOnePage";
import { FeatureClassPath } from "../../interfaces/interfaces";

import { FeatureClassOutput } from "../../interfaces/interfaces";
import Derivatives from "../Derivatives";
import ThreeD from "../ThreeD";
import AboutPage from "../About";

import PageTitle from "../../components/PageTitle";

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
  path: levituumPath,
  element: (
    <>
      <PageTitle title="Levituum" />
      <App />
    </>
  ),
};

const allLevituumPath = {
  path: `${levituumPath}/all`,
  element: (
    <>
      <PageTitle title="levituumAll" translate={true} />
      <OnePagerForData
        allTablesAndDomains={generateAllDataMerge(allLevituumDataTogether)}
      />
    </>
  ),
};

const allDerivativePath = {
  path: `${derivedPathMany}/all`,
  element: (
    <>
      <PageTitle title="tuletiskihidAll" translate={true} />
      <OnePagerForData
        allTablesAndDomains={generateAllDataMerge(allTuletiskihidTogether)}
      />
    </>
  ),
};

const all3DPath = {
  path: `${path3d}/all`,
  element: (
    <>
      <PageTitle title="3DAll" translate={true} />
      <OnePagerForData
        allTablesAndDomains={generateAllDataMerge(all3dTogether)}
      />
    </>
  ),
};

const derivativePath = {
  path: derivedPathMany,
  element: (
    <>
      <PageTitle title="nameDerivatives" translate={true} />
      <Derivatives />,
    </>
  ),
};

const threeDPath = {
  path: path3d,
  element: (
    <>
      <PageTitle title="3D" />
      <ThreeD />,
    </>
  ),
};

const aboutPath = {
  path: pathAbout,
  element: (
    <>
      <PageTitle title="nameAboutPage" translate={true} />
      <AboutPage />,
    </>
  ),
};

const featureClassPath = (
  featureclasses: FeatureClassOutput[],
  pageName: string
): FeatureClassPath[] => {
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `${pageName}/${fc.groupName}/${fc.fcName}`,
    element: (
      <>
        <PageTitle title={fc.fcName} />
        <FullDataTable
          fcName={fc.fcName}
          groupName={fc.groupName}
          elements={fc.elements}
          domainTables={fc.domainTables}
          headingData={fc.headingData}
        />
      </>
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
  ...featureClassPath(generateFeatureClass().punktobjektid, levituumPath),
  ...featureClassPath(generateFeatureClass().joonobjektid, levituumPath),
  ...featureClassPath(generateFeatureClass().pindobjektidOverlap, levituumPath),
  ...featureClassPath(generateFeatureClass().pindobjektid, levituumPath),
  ...featureClassPath(generateFeatureClass().metaandmed, levituumPath),
  ...featureClassPath(
    generateFeatureClass().tuletiskihidLines,
    derivedPathMany
  ),
  ...featureClassPath(
    generateFeatureClass().tuletiskihidPolygons,
    derivedPathMany
  ),
  ...featureClassPath(generateFeatureClass().lod2, path3d),
  ...featureClassPath(generateFeatureClass().lod1, path3d),
  ...featureClassPath(generateFeatureClass().lod0, path3d),
];
