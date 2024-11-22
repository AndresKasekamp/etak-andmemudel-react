import { POINT_GEOMETRY, POLY_GEOMETRY, LINE_GEOMETRY } from "./dataTypes.ts";

import pointImageSource from "../assets/multipoint.svg";
import polyImageSource from "../assets/polygon-hole-o.svg";
import lineImageSource from "../assets/polyline-pt.svg";

import {
  pointPath,
  linePath,
  polyPath,
  metadataPath,
  derivedPath,
} from "../pages/groupPaths.ts";

import feature_classes from "../api/levituum/fields.json" assert { type: "json" };
import feature_classes_tuletiskihid from "../api/tuletiskihid/fields.json" assert { type: "json" };

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
    metaandmed: [],
    punktobjektid: [],
    joonobjektid: [],
    pindobjektidOverlap: [],
    pindobjektid: [],
    tuletiskihid: [],
  };

  const GEOMETRY_MAP: Record<string, GeometryInfo> = {
    alusdokument: {
      group: metadataPath,
      type: POLY_GEOMETRY,
      dimension: 2,
      image: polyImageSource,
    },
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
    etak: {
      group: derivedPath,
      type: POLY_GEOMETRY,
      dimension: 2.5,
      image: polyImageSource,
    },
  };

  const determineFeatureClass = (name: string): GeometryInfo => {
    const suffix = name.substring(name.lastIndexOf("_") + 1);
    return GEOMETRY_MAP[suffix] || GEOMETRY_MAP["etak"]; // Default to tuletiskiht if not found
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
      case "alusdokument":
        allFeatureClasses.metaandmed.push(fcObj);
        break;
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

  feature_classes_tuletiskihid.forEach((fc) => {
    const fcObj = createFc(fc);
    const fcType = fcObj.fcName.substring(0, fcObj.fcName.indexOf("_"));

    switch (fcType) {
      case "etak":
        allFeatureClasses.tuletiskihid.push(fcObj);
        break;
    }
  });

  return allFeatureClasses;
};
