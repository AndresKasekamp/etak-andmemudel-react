import feature_classes from "../api/levituum/fields.json" assert { type: "json" };
import feature_classes_tuletiskihid from "../api/tuletiskihid/fields.json" assert { type: "json" };
import feature_classes_3d from "../api/3D/fields.json" assert { type: "json" };

import { domainFinderForLevituum, domainFinderFor3D } from "./domains.ts";

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
    // tuletiskihid: [],
    tuletiskihidLines: [],
    tuletiskihidPolygons: [],
    lod2: [],
    lod1: [],
    lod0: []
    // threeD: [],
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

    // Workaround for lod2 buildings (classification from gdal)
    if (name === "hooned_lod2") {
      geom_type = "3D TIN";
    }
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
    const groups3d = ["lod2", "lod1", "lod0"]
    if (!groups3d.includes(group)) {
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

    switch (fc.group) {
      case "lines":
        allFeatureClasses.tuletiskihidLines.push(fcObj);
        break;
      case "polygons":
        allFeatureClasses.tuletiskihidPolygons.push(fcObj);
        break;
    }
  });

  feature_classes_3d.forEach((fc) => {
    const fcObj = createFeatureClass(fc);

    switch (fc.group) {
      case "lod2":
        allFeatureClasses.lod2.push(fcObj);
        break;
      case "lod1":
        allFeatureClasses.lod1.push(fcObj);
        break;
      case "lod0":
        allFeatureClasses.lod0.push(fcObj);
        break;
      }
  });

  return allFeatureClasses;
};
