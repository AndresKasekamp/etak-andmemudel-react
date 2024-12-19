import pointImageSource from "../assets/multipoint.svg";
import polyImageSource from "../assets/polygon-hole-o.svg";
import lineImageSource from "../assets/polyline-pt.svg";
import threeDImageSource from "../assets/cube-3d-2.svg";

import { GeomTypeInfo, GeomTypeKey } from "../interfaces/interfaces";

import {
  pointPath,
  linePath,
  polyPath,
  metadataPath,
  derivedPath,
  threeDPath,
  lod2Path,
  lod1Path,
  lod0Path
} from "../pages/paths/groupPaths.ts";

export const SHORT_INTEGER = "lühike täisarv";
export const INTEGER = "täisarv";
export const DATE = "kuupäev";
export const REAL_NUMBER = "reaalarv";
export const GEOMETRY = "geomeetria";

export const POINT_GEOMETRY = "punkt";
export const LINE_GEOMETRY = "joon";
export const POLY_GEOMETRY = "pind";

const SPATIAL_DIMENSION_2 = 2;
const SPATIAL_DIMENSION_2_5 = 2.5;
const SPATIAL_DIMENSION_3 = 3;

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
  Polygon: {
    geom_type: POLY_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2,
    image: polyImageSource,
  },
  "3D Point": {
    geom_type: POINT_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2_5,
    image: pointImageSource,
  },
  "3D Multi Line String": {
    geom_type: LINE_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2_5,
    image: lineImageSource,
  },
  "3D Multi Polygon": {
    geom_type: POLY_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2_5,
    image: polyImageSource,
  },
  "Multi Polygon": {
    geom_type: POLY_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2,
    image: polyImageSource,
  },
  "3D TIN": {
    geom_type: POLY_GEOMETRY,
    dimension: SPATIAL_DIMENSION_3,
    image: threeDImageSource,
  },
  Point: {
    geom_type: POINT_GEOMETRY,
    dimension: SPATIAL_DIMENSION_2,
    image: pointImageSource,
  },
};

export const GroupNames: Record<string, string> = {
  meta: metadataPath,
  points: pointPath,
  lines: linePath,
  land_cover: polyPath,
  overlapping: polyPath,
  polygons: polyPath,
  derivatives: derivedPath,
  "3D": threeDPath,
  lod2: lod2Path,
  lod1: lod1Path,
  lod0: lod0Path
};
