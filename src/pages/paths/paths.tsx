import { generateFeatureClass } from "../../data/featureClasses";
import App from "../../App";
import { FullDataTable } from "../../components/FullDataTable";
import { OnePagerForData } from "../../components/AllDataInOnePage";
import {
  FeatureClassPath,
  FeatureClassOutput,
} from "../../interfaces/interfaces";
import About from "../About";
import PageTitle from "../../components/PageTitle";

import {
  threeDPath as path3d,
  derivedPathMany,
  aboutPath as pathAbout,
  levituumPath,
  pointPath,
  polyPath,
  linePath,
  metadataPath,
  lod0Path,
  lod1Path,
  lod2Path,
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
      <App
        pageTitle="overView"
        data={[
          {
            objectName: "nameMetadata",
            dataTypeClass: metadataPath,
            itemNames: generateFeatureClass().metaandmed,
          },
          {
            objectName: "namePointObjects",
            dataTypeClass: pointPath,
            itemNames: generateFeatureClass().punktobjektid,
          },
          {
            objectName: "nameLineObjects",
            dataTypeClass: linePath,
            itemNames: generateFeatureClass().joonobjektid,
          },
          {
            objectName: "nameMainPolygonObjects",
            dataTypeClass: polyPath,
            itemNames: generateFeatureClass().pindobjektid,
          },
          {
            objectName: "nameOverlappingPolygonObjects",
            dataTypeClass: polyPath,
            itemNames: generateFeatureClass().pindobjektidOverlap,
          },
        ]}
      />
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
      <App
        pageTitle="nameDerivatives"
        data={[
          {
            objectName: "nameLineObjects",
            dataTypeClass: linePath,
            itemNames: generateFeatureClass().tuletiskihidLines,
          },

          {
            objectName: "nameAllPolygonObjects",
            dataTypeClass: polyPath,
            itemNames: generateFeatureClass().tuletiskihidPolygons,
          },
        ]}
      />
      ,
    </>
  ),
};

const threeDPath = {
  path: path3d,
  element: (
    <>
      <PageTitle title="3D" />
      <App
        pageTitle="name3DLayers"
        data={[
          {
            objectName: "LoD2",
            dataTypeClass: lod2Path,
            itemNames: generateFeatureClass().lod2,
          },
          {
            objectName: "LoD1",
            dataTypeClass: lod1Path,
            itemNames: generateFeatureClass().lod1,
          },
          {
            objectName: "LoD0",
            dataTypeClass: lod0Path,
            itemNames: generateFeatureClass().lod0,
          },
        ]}
      />
      ,
    </>
  ),
};

const aboutPath = {
  path: pathAbout,
  element: (
    <>
      <PageTitle title="nameAboutPage" translate={true} />
      <About />,
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
