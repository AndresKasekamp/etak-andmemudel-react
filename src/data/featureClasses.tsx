import feature_classes from "../api/levituum/fields.json" assert { type: "json" };
import feature_classes_tuletiskihid from "../api/tuletiskihid/fields.json" assert { type: "json" };
import feature_classes_3d from "../api/3D/fields.json" assert { type: "json" };

import { domainFinderForLevituum, domainFinderFor3D } from "./domains.tsx";

import {
  FeatureClasses,
  FeatureClassInput,
  FeatureClassOutput,
  Field,
  DomainTable,
} from "../interfaces/interfaces.tsx";

import { GeomTypes, GroupNames } from "./dataTypes.ts";

export const generateFeatureClass = (): FeatureClasses => {
  const allFeatureClasses: FeatureClasses = {
    metaandmed: [],
    punktobjektid: [],
    joonobjektid: [],
    pindobjektidOverlap: [],
    pindobjektid: [],
    tuletiskihid: [],
    threeD: [],
  };

  const createFeatureClass = ({
    name,
    group,
    fields,
    desc,
    count,
    geom_type,
  }: FeatureClassInput): FeatureClassOutput => {
    // Getting the description in the correct language

    return {
      fcName: name,
      groupName: GroupNames[group],
      elements: fields,
      domainTables: getDomains(fields, group),
      headingData: {
        // @ts-ignore
        geomType: GeomTypes[geom_type].geom_type,
        // @ts-ignore
        geomDimension: GeomTypes[geom_type].dimension,
        // @ts-ignore
        image: GeomTypes[geom_type].image,
        desc,
        count,
      },
    };
  };

  const getDomains = (fields: Field[], group: string): DomainTable[] => {
    if (group !== "3D") {
      return fields.flatMap((field) =>
        field.domain ? [domainFinderForLevituum(field.domain)] : []
      );
    } else {
      return fields.flatMap((field) =>
        field.domain ? [domainFinderFor3D(field.domain)] : []
      );
    }
  };

  feature_classes.forEach((fc) => {
    const fcObj = createFeatureClass(fc);

    switch (fc.group) {
      case "meta":
        allFeatureClasses.metaandmed.push(fcObj);
        break;
      case "points":
        allFeatureClasses.punktobjektid.push(fcObj);
        break;
      case "lines":
        allFeatureClasses.joonobjektid.push(fcObj);
        break;
      case "land_cover":
        allFeatureClasses.pindobjektid.push(fcObj);
        break;
      case "overlapping":
        allFeatureClasses.pindobjektidOverlap.push(fcObj);
        break;
    }
  });

  feature_classes_tuletiskihid.forEach((fc) => {
    const fcObj = createFeatureClass(fc);
    allFeatureClasses.tuletiskihid.push(fcObj);
  });

  feature_classes_3d.forEach((fc) => {
    const fcObj = createFeatureClass(fc);

    allFeatureClasses.threeD.push(fcObj);
  });

  return allFeatureClasses;
};
