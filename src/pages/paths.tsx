import {
  // etakJoonobjektid,
  // etakPindobjektidMain,
  // etakPindobjektidOverlap,
  // etakPunktobjektid,
  etakPunktobjektid2,
} from "./featureClasses";
import App from "../App";
import EtakTable from "../components/EtakTable";
import { FeatureClass, FeatureClassPath } from "../types/interfaces";

const initPath = {
  path: "/",
  element: <App />,
};

const featureClassPath = (
  featureclasses: FeatureClass[],
  dataTypeClass: string
): FeatureClassPath[] => {
  const featureclassPaths = featureclasses.map((fc) => ({
    path: `${dataTypeClass}/${fc.fcName}`,
    element: <EtakTable addedRows={fc.elements} />,
  }));

  return featureclassPaths;
};

export const paths = () => [
  initPath,

  ...featureClassPath(etakPunktobjektid2, "punktobjekt"),
  // ...featureClassPath(etakJoonobjektid, "joonobjekt"),
  // ...featureClassPath(etakPindobjektidOverlap, "pindobjekt"),
  // ...featureClassPath(etakPindobjektidMain, "pindobjekt"),
];
