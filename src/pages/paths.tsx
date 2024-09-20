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

// Image sources
import pointImageSource from "../assets/multipoint.svg";
import polyImageSource from "../assets/polygon-hole-o.svg";
// import polyLineImageSource from "../assets/polyline-pt.svg";
// import cubeImageSource from "../assets/cube-3d.svg";

const initPath = {
  path: "/",
  element: <App />,
};

const featureClassPath = (
  featureclasses: FeatureClass[],
  dataTypeClass: string,
  image: string
): FeatureClassPath[] => {
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `${dataTypeClass}/${fc.fcName}`,
    element: (
      <FullDataTable
        addedRows={fc.elements}
        imageSrc={image}
        associatedDomains={fc.domainTables}
        headingData={fc.headingData}
      />
    ),
  }));

  return featureclassPaths;
};

export const paths = () => [
  initPath,

  ...featureClassPath(etakPunktobjektid, "punktobjekt", pointImageSource),
  ...featureClassPath(metadata, "etak", polyImageSource),
  ...featureClassPath(derivedLayers, "etak", polyImageSource),
  // ...featureClassPath(etakJoonobjektid, "joonobjekt"),
  // ...featureClassPath(etakPindobjektidOverlap, "pindobjekt"),
  // ...featureClassPath(etakPindobjektidMain, "pindobjekt"),
];
