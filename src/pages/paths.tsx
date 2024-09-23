import {
  // etakJoonobjektid,
  // etakPindobjektidMain,
  // etakPindobjektidOverlap,
  etakPunktobjektid,
  metadata,
  derivedLayers
} from "../data/featureClasses";
import App from "../App";
import { FullDataTable } from "../components/FullDataTable";
import { FeatureClass, FeatureClassPath } from "../interfaces/interfaces";
import { pointPath, metadataPath, derivedPath } from "./groupPaths";
import { OnePager2d } from "../components/OnePager2d";
// Image sources
import pointImageSource from "../assets/multipoint.svg";
import polyImageSource from "../assets/polygon-hole-o.svg";
// import polyLineImageSource from "../assets/polyline-pt.svg";
// import cubeImageSource from "../assets/cube-3d.svg";

const allDataTogether = [...etakPunktobjektid];

const generateAllDataTogether = () => {

}


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
  dataTypeClass: string,
  image: string
): FeatureClassPath[] => {

  console.log("ETAK Punktobjektid", featureclasses)
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `${dataTypeClass}/${fc.fcName}`,
    element: (
      <FullDataTable
        name={fc.fcName}
        rows={fc.elements}
        image={image}
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
  ...featureClassPath(etakPunktobjektid, pointPath, pointImageSource),
  ...featureClassPath(metadata, metadataPath, polyImageSource),
  ...featureClassPath(derivedLayers, derivedPath, polyImageSource),
  // ...featureClassPath(etakJoonobjektid, "joonobjekt"),
  // ...featureClassPath(etakPindobjektidOverlap, "pindobjekt"),
  // ...featureClassPath(etakPindobjektidMain, "pindobjekt"),
];
