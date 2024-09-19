import {
  RowData,
  DescRowData,
  ElementNameColor,
} from "../interfaces/interfaces";
import {
  MainElementColor,
  EsriElementColor,
  EtakMetaColor,
  RegisterColor,
} from "./colors";
import etak_kirjeldus from "./etak_kirjeldus.json" assert { type: "json" };
import RegisterHyperLink from "../components/formatHelpers/RegisterHyperLink";

export const createData = (
  name: ElementNameColor,
  dataType: string,
  domain: string,
  desc: DescRowData
): RowData => {
  return { name, dataType, domain, desc };
};

export const otherShapes = {
  shape_Length: createData(
    {
      name: etak_kirjeldus.classes._default.fields.shape_Length.name,
      color: EsriElementColor,
    },
    "reaalarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.shape_Length.description.et,
      hyperlink: null,
    }
  ),

  shape_Area: createData(
    {
      name: etak_kirjeldus.classes._default.fields.shape_Area.name,
      color: EsriElementColor,
    },
    "reaalarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.shape_Area.description.et,
      hyperlink: null,
    }
  ),

  objectid: createData(
    {
      name: etak_kirjeldus.classes._default.fields.objectid.name,
      color: EsriElementColor,
    },
    "täisarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.objectid.description.et,
      hyperlink: null,
    }
  ),

  shape: createData(
    {
      name: etak_kirjeldus.classes._default.fields.shape.name,
      color: EsriElementColor,
    },
    "geomeetria",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.shape.description.et,
      hyperlink: null,
    }
  ),
};

//
// TODO välja arvatud sõidutee osa
export const otherRegisterSources = {
  kmr_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.kmr_id.name,
      color: RegisterColor,
    },
    "täisarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.kmr_id.description.et,
      hyperlink: (
        <RegisterHyperLink
          link={etak_kirjeldus.classes._default.fields.kmr_id.link}
          desc={etak_kirjeldus.classes._default.fields.kmr_id.description.et}
        ></RegisterHyperLink>
      ),
    }
  ),

  kkr_kood: createData(
    {
      name: etak_kirjeldus.classes._default.fields.kkr_kood.name,
      color: RegisterColor,
    },
    "tekst(30)",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.kkr_kood.description.et,
      hyperlink: (
        <RegisterHyperLink
          link={etak_kirjeldus.classes._default.fields.kkr_kood.link}
          desc={etak_kirjeldus.classes._default.fields.kkr_kood.description.et}
        ></RegisterHyperLink>
      ),
    }
  ),

  nimetus: createData(
    {
      name: etak_kirjeldus.classes._default.fields.nimetus.name,
      color: RegisterColor,
    },
    "tekst(255)",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.nimetus.description.et,
      hyperlink: null,
    }
  ),

  knr_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.knr_id.name,
      color: RegisterColor,
    },
    "täisarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.knr_id.description.et,
      hyperlink: (
        <RegisterHyperLink
          link={etak_kirjeldus.classes._default.fields.knr_id.link}
          desc={etak_kirjeldus.classes._default.fields.knr_id.description.et}
        ></RegisterHyperLink>
      ),
    }
  ),

  kpo_seos: createData(
    { name: "kpo_seos", color: RegisterColor },
    "lühike täisarv",
    "seisuveekogu_kpo",
    {
      desc: "Seisuveekogu roll KPO ISs",
      hyperlink: null,
    }
  ),

  mps_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.mps_id.name,
      color: RegisterColor,
    },
    "tekst(17)",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.mps_id.description.et,
      hyperlink: (
        <RegisterHyperLink
          link={etak_kirjeldus.classes._default.fields.mps_id.link}
          desc={etak_kirjeldus.classes._default.fields.mps_id.description.et}
        ></RegisterHyperLink>
      ),
    }
  ),

  ehr_gid: createData(
    {
      name: etak_kirjeldus.classes._default.fields.ehr_gid.name,
      color: RegisterColor,
    },
    "tekst(20)",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.ehr_gid.description.et,
      hyperlink: (
        <RegisterHyperLink
          link={etak_kirjeldus.classes._default.fields.ehr_gid.link}
          desc={etak_kirjeldus.classes._default.fields.ehr_gid.description.et}
        ></RegisterHyperLink>
      ),
    }
  ),

  ads_oid: createData(
    {
      name: etak_kirjeldus.classes._default.fields.ads_oid.name,
      color: RegisterColor,
    },
    "tekst(10)",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.ads_oid.description.et,
      hyperlink: (
        <RegisterHyperLink
          link={etak_kirjeldus.classes._default.fields.ads_oid.link}
          desc={etak_kirjeldus.classes._default.fields.ads_oid.description.et}
        ></RegisterHyperLink>
      ),
    }
  ),

  ads_lahiaadress: createData(
    {
      name: etak_kirjeldus.classes._default.fields.ads_lahiaadress.name,
      color: RegisterColor,
    },
    "tekst(255)",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.ads_lahiaadress.description
        .et,
      hyperlink: null,
    }
  ),

  kov_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.kov_id.name,
      color: RegisterColor,
    },
    "täisarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.kov_id.description.et,
      hyperlink: null,
    }
  ),

  mark: createData(
    {
      name: etak_kirjeldus.classes._default.fields.mark.name,
      color: RegisterColor,
    },
    "lühike täisarv",
    "toevaartus",
    {
      desc: etak_kirjeldus.classes._default.fields.mark.description.et,
      hyperlink: null,
    }
  ),
};

export const mainFields = {
  etak_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.etak_id.name,
      color: MainElementColor,
    },
    "täisarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.etak_id.description.et,
      hyperlink: null,
    }
  ),

  markused: createData(
    {
      name: etak_kirjeldus.classes._default.fields.markused.name,
      color: MainElementColor,
    },
    "tekst(255)",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.markused.description.et,
      hyperlink: null,
    }
  ),

  objectid: otherShapes.objectid,
  shape: otherShapes.shape,

  muutmisaeg: createData(
    {
      name: etak_kirjeldus.classes._default.fields.muutmisaeg.name,
      color: EtakMetaColor,
    },
    "kuupäev",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.muutmisaeg.description.et,
      hyperlink: null,
    }
  ),

  andmeallika_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.andmeallika_id.name,
      color: EtakMetaColor,
    },
    "täisarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.andmeallika_id.description
        .et,

      hyperlink: null,
    }
  ),

  korgusallika_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.korgusallika_id.name,
      color: EtakMetaColor,
    },
    "täisarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.korgusallika_id.description
        .et,
      hyperlink: null,
    }
  ),

  ruumikujuallika_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.ruumikujuallika_id.name,
      color: EtakMetaColor,
    },
    "täisarv",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.ruumikujuallika_id
        .description.et,

      hyperlink: null,
    }
  ),

  vajalik: createData(
    {
      name: etak_kirjeldus.classes._default.fields.vajalik.name,
      color: EtakMetaColor,
    },
    "lühike täisarv",
    "vajalikkus",
    {
      desc: etak_kirjeldus.classes._default.fields.vajalik.description.et,

      hyperlink: null,
    }
  ),

  geom_muutmisaeg: createData(
    {
      name: etak_kirjeldus.classes._default.fields.geom_muutmisaeg.name,
      color: EtakMetaColor,
    },
    "kuupäev",
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.geom_muutmisaeg.description
        .et,
      hyperlink: null,
    }
  ),
};

export const generateDataFields = () => {
  const genFields: object[] = [];

  const metadataCombined = { ...metadataFields, ...otherShapes };

  // Main field block
  Object.values(metadataCombined).forEach((value, index) => {
    const gfield = generateField(value, index);
    genFields.push(gfield);
  });

  return genFields;
};

export const metadataFields = {
  andmeallikas: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.andmeallikas.name,
      color: MainElementColor,
    },
    "tekst(100)",
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.andmeallikas.description
        .et,
      hyperlink: null,
    }
  ),

  kood: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.kood.name,
      color: MainElementColor,
    },
    "lühike täisarv",
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.kood.description.et,
      hyperlink: null,
    }
  ),

  korguskood: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.korguskood.name,
      color: MainElementColor,
    },
    "lühike täisarv",
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.korguskood.description
        .et,
      hyperlink: null,
    }
  ),

  nimetus: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.nimetus.name,
      color: MainElementColor,
    },
    "tekst(100)",
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.nimetus.description.et,
      hyperlink: null,
    }
  ),

  tyyp: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.tyyp.name,
      color: MainElementColor,
    },
    "lühike täisarv",
    "alusdokument_tyyp",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.tyyp.description.et,
      hyperlink: null,
    }
  ),

  aeg: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.aeg.name,
      color: MainElementColor,
    },
    "kuupäev",
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.aeg.description.et,
      hyperlink: null,
    }
  ),

  markused: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.markused.name,
      color: MainElementColor,
    },
    "tekst(255)",
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.markused.description.et,
      hyperlink: null,
    }
  ),

  tapsus: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.tapsus.name,
      color: MainElementColor,
    },
    "lühike täisarv",
    "tapsusklass_xy",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.tapsus.description.et,
      hyperlink: null,
    }
  ),

  korgustapsus: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.korgustapsus.name,
      color: MainElementColor,
    },
    "lühike täisarv",
    "tapsusklass_z",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.korgustapsus.description
        .et,
      hyperlink: null,
    }
  ),
};

export const generateKood = (domain: string) => {
  const koodField = {
    row: createData(
      {
        name: etak_kirjeldus.classes._default.fields.kood.name,
        color: MainElementColor,
      },
      "lühike täisarv",
      domain,
      {
        desc: etak_kirjeldus.classes._default.fields.kood.description.et,
        hyperlink: null,
      }
    ),
    position: 1,
  };

  return koodField;
};

export const generateKoodAlusdokument = () => {
  const koodField = {
    row: createData(
      {
        name: etak_kirjeldus.classes._default.fields.kood.name,
        color: MainElementColor,
      },
      "lühike täisarv",
      "",
      {
        desc: etak_kirjeldus.classes.alusdokument.fields.kood.description.et,
        hyperlink: null,
      }
    ),
    position: 1,
  };

  return koodField;
};

export const generateTyyp = (domain: string, desc: DescRowData) => {
  const tyypField = {
    row: createData(
      { name: "tyyp", color: MainElementColor },
      "lühike täisarv",
      domain,
      desc
    ),
    position: 2,
  };

  return tyypField;
};

export const generateKorgus = (desc: DescRowData, position: number) => {
  const korgusField = {
    row: createData(
      { name: "korgus", color: MainElementColor },
      "lühike täisarv",
      "",
      desc
    ),
    position,
  };

  return korgusField;
};

export const generateField = (row: RowData, position: number) => {
  const field = {
    row,
    position,
  };

  return field;
};

export const generateHeadingData = (
  geomType: string,
  estName: string,
  geomDimension: number = 2.5
) => {
  const heading = {
    geomType,
    geomDimension,
    estName,
  };

  return heading;
};
