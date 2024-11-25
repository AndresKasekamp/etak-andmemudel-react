import pointImageSource from "../assets/multipoint.svg";
import polyImageSource from "../assets/polygon-hole-o.svg";
import lineImageSource from "../assets/polyline-pt.svg";
import threeDImageSource from "../assets/cube-3d-2.svg";

import { GeomTypeInfo, GeomTypeKey } from "../interfaces/interfaces";

export const SHORT_INTEGER = "lühike täisarv";
export const INTEGER = "täisarv";
export const DATE = "kuupäev";
export const REAL_NUMBER = "reaalarv";
export const GEOMETRY = "geomeetria";

export const POINT_GEOMETRY = "punkt";
export const LINE_GEOMETRY = "joon";
export const POLY_GEOMETRY = "pind";

const SPATIAL_DIMENSION_2 = 2
const SPATIAL_DIMENSION_2_5 = 2.5
const SPATIAL_DIMENSION_3 = 3

export const CREATE_TEXT_TYPE = (length: number) => {
  return `tekst(${length.toString()})`;
};

// Define the dictionary with improved type safety
export const GeomTypes: Record<GeomTypeKey, GeomTypeInfo> = {
  "Multi Line String": {
    geom_type: LINE_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2_5,
    image: lineImageSource,
  },
  "Line String": {
    geom_type: LINE_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2,
    image: lineImageSource,
  },
  "Polygon": {
    geom_type: POLY_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2,
    image: polyImageSource,
  },
};


