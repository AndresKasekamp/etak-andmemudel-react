import {
  // etakJoonobjektid,
  // etakPindobjektidMain,
  // etakPindobjektidOverlap,
  etakPunktobjektid,
} from "../data/featureClasses";
import App from "../App";
import EtakTable from "../components/EtakTable";
import { FeatureClass, FeatureClassPath } from "../types/interfaces";

// Image sources
import pointImageSource from "../assets/multipoint.svg";
// import polyImageSource from "../assets/polygon-hole-o.svg";
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
    element: <EtakTable addedRows={fc.elements} imageSrc={image} />,
  }));

  return featureclassPaths;
};

export const paths = () => [
  initPath,

  ...featureClassPath(etakPunktobjektid, "punktobjekt", pointImageSource),
  // ...featureClassPath(etakJoonobjektid, "joonobjekt"),
  // ...featureClassPath(etakPindobjektidOverlap, "pindobjekt"),
  // ...featureClassPath(etakPindobjektidMain, "pindobjekt"),
];
