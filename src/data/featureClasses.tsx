import { POINT_GEOMETRY, POLY_GEOMETRY, LINE_GEOMETRY } from "./dataTypes.ts";

import pointImageSource from "../assets/multipoint.svg";
import polyImageSource from "../assets/polygon-hole-o.svg";
import lineImageSource from "../assets/polyline-pt.svg";

import { pointPath, linePath, polyPath } from "../pages/groupPaths.ts";

import feature_classes from "../api/fields.json" assert { type: "json" };

import { domainFinder } from "./domains.tsx";

import {
  FeatureClasses,
  GeometryInfo,
  FeatureClassInput,
  FeatureClassOutput,
  Field,
  DomainTable,
} from "../interfaces/interfaces.tsx";

export const generateFeatureClass = (): FeatureClasses => {
  const allFeatureClasses: FeatureClasses = {
    punktobjektid: [],
    joonobjektid: [],
    pindobjektidOverlap: [],
    pindobjektid: [],
  };

  const GEOMETRY_MAP: Record<string, GeometryInfo> = {
    p: {
      group: pointPath,
      type: POINT_GEOMETRY,
      dimension: 2.5,
      image: pointImageSource,
    },
    j: {
      group: linePath,
      type: LINE_GEOMETRY,
      dimension: 2.5,
      image: lineImageSource,
    },
    a: {
      group: polyPath,
      type: POLY_GEOMETRY,
      dimension: 2.5,
      image: polyImageSource,
    },
    ka: {
      group: polyPath,
      type: POLY_GEOMETRY,
      dimension: 2.5,
      image: polyImageSource,
    },
  };

  const determineFeatureClass = (name: string): GeometryInfo => {
    const suffix = name.substring(name.lastIndexOf("_") + 1);
    return GEOMETRY_MAP[suffix] || GEOMETRY_MAP["a"]; // Default to polygon if not found
  };

  const createFc = ({
    name,
    fields,
    desc,
  }: FeatureClassInput): FeatureClassOutput => {
    const { group, type, dimension, image } = determineFeatureClass(name);
    return {
      fcName: name,
      groupName: group,
      elements: fields,
      domainTables: getDomains(fields),
      headingData: {
        geomType: type,
        geomDimension: dimension,
        image,
        estName: desc,
      },
    };
  };

  const getDomains = (fields: Field[]): DomainTable[] => {
    return fields.flatMap((field) =>
      field.domain ? [domainFinder(field.domain)] : []
    );
  };

  feature_classes.forEach((fc) => {
    const fcObj = createFc(fc);
    const fcType = fcObj.fcName.substring(fcObj.fcName.lastIndexOf("_") + 1);

    switch (fcType) {
      case "p":
        allFeatureClasses.punktobjektid.push(fcObj);
        break;
      case "j":
        allFeatureClasses.joonobjektid.push(fcObj);
        break;
      case "a":
        allFeatureClasses.pindobjektid.push(fcObj);
        break;
      case "ka":
        allFeatureClasses.pindobjektidOverlap.push(fcObj);
        break;
    }
  });

  return allFeatureClasses;
};
