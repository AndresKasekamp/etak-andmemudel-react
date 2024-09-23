import {
  RowData,
  DescRowData,
  ElementNameCategory,
  Row
} from "../interfaces/interfaces";
import {
  MainCategory,
  EsriCategory,
  EtakMetaCategory,
  RegisterCategory,
} from "./colors";
import etak_kirjeldus from "./etak_kirjeldus.json" assert { type: "json" };
import RegisterHyperLink from "../components/formatHelpers/RegisterHyperLink";
import {
  REAL_NUMBER,
  INTEGER,
  SHORT_INTEGER,
  GEOMETRY,
  DATE,
  CREATE_TEXT_TYPE,
} from "./dataTypes";

// TODO create data objektis row, position - postion ära kaotada
export const createData = (
  name: ElementNameCategory,
  dataType: string,
  domain: string,
  desc: DescRowData
): RowData => {
  return { name, dataType, domain, desc };
};

export const esriCategoryFields = {
  shape_Length: createData(
    {
      name: etak_kirjeldus.classes._default.fields.shape_Length.name,
      category: EsriCategory,
    },
    REAL_NUMBER,
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.shape_Length.description.et,
      hyperlink: null,
    }
  ),

  shape_Area: createData(
    {
      name: etak_kirjeldus.classes._default.fields.shape_Area.name,
      category: EsriCategory,
    },
    REAL_NUMBER,
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.shape_Area.description.et,
      hyperlink: null,
    }
  ),

  objectid: createData(
    {
      name: etak_kirjeldus.classes._default.fields.objectid.name,
      category: EsriCategory,
    },
    INTEGER,
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.objectid.description.et,
      hyperlink: null,
    }
  ),

  shape: createData(
    {
      name: etak_kirjeldus.classes._default.fields.shape.name,
      category: EsriCategory,
    },
    GEOMETRY,
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
      category: RegisterCategory,
    },
    INTEGER,
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
      category: RegisterCategory,
    },
    CREATE_TEXT_TYPE(30),
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
      category: RegisterCategory,
    },
    CREATE_TEXT_TYPE(255),
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.nimetus.description.et,
      hyperlink: null,
    }
  ),

  knr_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.knr_id.name,
      category: RegisterCategory,
    },
    INTEGER,
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
    { name: "kpo_seos", category: RegisterCategory },
    SHORT_INTEGER,
    "seisuveekogu_kpo",
    {
      desc: "Seisuveekogu roll KPO ISs",
      hyperlink: null,
    }
  ),

  mps_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.mps_id.name,
      category: RegisterCategory,
    },
    CREATE_TEXT_TYPE(17),
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
      category: RegisterCategory,
    },
    CREATE_TEXT_TYPE(20),
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
      category: RegisterCategory,
    },
    CREATE_TEXT_TYPE(10),
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
      category: RegisterCategory,
    },
    CREATE_TEXT_TYPE(255),
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
      category: RegisterCategory,
    },
    INTEGER,
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.kov_id.description.et,
      hyperlink: null,
    }
  ),

  mark: createData(
    {
      name: etak_kirjeldus.classes._default.fields.mark.name,
      category: RegisterCategory,
    },
    SHORT_INTEGER,
    "toevaartus",
    {
      desc: etak_kirjeldus.classes._default.fields.mark.description.et,
      hyperlink: null,
    }
  ),
};

export const etakMainCategoryFields = {
  etak_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.etak_id.name,
      category: MainCategory,
    },
    INTEGER,
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.etak_id.description.et,
      hyperlink: null,
    }
  ),

  markused: createData(
    {
      name: etak_kirjeldus.classes._default.fields.markused.name,
      category: MainCategory,
    },
    CREATE_TEXT_TYPE(255),
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.markused.description.et,
      hyperlink: null,
    }
  ),
};

export const etakMetaCategoryFields = {
  muutmisaeg: createData(
    {
      name: etak_kirjeldus.classes._default.fields.muutmisaeg.name,
      category: EtakMetaCategory,
    },
    DATE,
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.muutmisaeg.description.et,
      hyperlink: null,
    }
  ),

  andmeallika_id: createData(
    {
      name: etak_kirjeldus.classes._default.fields.andmeallika_id.name,
      category: EtakMetaCategory,
    },
    INTEGER,
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
      category: EtakMetaCategory,
    },
    INTEGER,
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
      category: EtakMetaCategory,
    },
    INTEGER,
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
      category: EtakMetaCategory,
    },
    SHORT_INTEGER,
    "vajalikkus",
    {
      desc: etak_kirjeldus.classes._default.fields.vajalik.description.et,

      hyperlink: null,
    }
  ),

  geom_muutmisaeg: createData(
    {
      name: etak_kirjeldus.classes._default.fields.geom_muutmisaeg.name,
      category: EtakMetaCategory,
    },
    DATE,
    "",
    {
      desc: etak_kirjeldus.classes._default.fields.geom_muutmisaeg.description
        .et,
      hyperlink: null,
    }
  ),
};

// TODO vb kombineerida, oleneb
export const generateMetadataFields = () => {
  const genFields: Row[] = [];

  const metadataCombined = { ...metadataFields, ...esriCategoryFields };

  // Main field block
  Object.values(metadataCombined).forEach((value) => {
    const gfield = generateField(value);
    genFields.push(gfield);
  });

  return genFields;
};

export const generatedDerivedDataFields = () => {
  const genFields: Row[] = [];

  const metadataCombined = { ...derivedFields, ...esriCategoryFields };

  // Main field block
  Object.values(metadataCombined).forEach((value) => {
    const gfield = generateField(value);
    genFields.push(gfield);
  });

  return genFields;
};

export const metadataFields = {
  andmeallikas: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.andmeallikas.name,
      category: MainCategory,
    },
    CREATE_TEXT_TYPE(100),
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
      category: MainCategory,
    },
    SHORT_INTEGER,
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.kood.description.et,
      hyperlink: null,
    }
  ),

  korguskood: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.korguskood.name,
      category: MainCategory,
    },
    SHORT_INTEGER,
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
      category: MainCategory,
    },
    CREATE_TEXT_TYPE(100),
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.nimetus.description.et,
      hyperlink: null,
    }
  ),

  tyyp: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.tyyp.name,
      category: MainCategory,
    },
    SHORT_INTEGER,
    "alusdokument_tyyp",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.tyyp.description.et,
      hyperlink: null,
    }
  ),

  aeg: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.aeg.name,
      category: MainCategory,
    },
    DATE,
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.aeg.description.et,
      hyperlink: null,
    }
  ),

  markused: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.markused.name,
      category: MainCategory,
    },
    CREATE_TEXT_TYPE(255),
    "",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.markused.description.et,
      hyperlink: null,
    }
  ),

  tapsus: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.tapsus.name,
      category: MainCategory,
    },
    SHORT_INTEGER,
    "tapsusklass_xy",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.tapsus.description.et,
      hyperlink: null,
    }
  ),

  korgustapsus: createData(
    {
      name: etak_kirjeldus.classes.alusdokument.fields.korgustapsus.name,
      category: MainCategory,
    },
    SHORT_INTEGER,
    "tapsusklass_z",
    {
      desc: etak_kirjeldus.classes.alusdokument.fields.korgustapsus.description
        .et,
      hyperlink: null,
    }
  ),
};

export const derivedFields = {
  kkr_tyyp: createData(
    {
      name: "kkr_tyyp",
      category: MainCategory,
    },
    SHORT_INTEGER,
    "",
    {
      desc: "Vooluveekogu tüüp",
      hyperlink: null,
    }
  ),

  korguste_vahe: createData(
    {
      name: "korguste_vahe",
      category: MainCategory,
    },
    REAL_NUMBER,
    "",
    {
      desc: "Lähte- ja suudmepunkti kõrguste vahe",
      hyperlink: null,
    }
  ),

  muutmisaeg: createData(
    {
      name: "muutmisaeg",
      category: MainCategory,
    },
    DATE,
    "",
    {
      desc: "Tervikkuju viimase uuendamise aeg",
      hyperlink: null,
    }
  ),
};

export const generateKood = (domain: string) => {
  const koodField = {
    row: createData(
      {
        name: etak_kirjeldus.classes._default.fields.kood.name,
        category: MainCategory,
      },
      SHORT_INTEGER,
      domain,
      {
        desc: etak_kirjeldus.classes._default.fields.kood.description.et,
        hyperlink: null,
      }
    ),
  };

  return koodField;
};



export const generateTyyp = (domain: string, desc: DescRowData) => {
  const tyypField = {
    row: createData(
      { name: "tyyp", category: MainCategory },
      SHORT_INTEGER,
      domain,
      desc
    ),
  };

  return tyypField;
};

export const generateKorgus = (desc: DescRowData) => {
  const korgusField = {
    row: createData(
      { name: "korgus", category: MainCategory },
      SHORT_INTEGER,
      "",
      desc
    ),
  };

  return korgusField;
};

export const generateField = (row: RowData) => {
  const field = {
    row,
  };

  return field;
};

export const generateHeadingData = (
  geomType: string,
  estName: string,
  image: string,
  geomDimension: number = 2.5
) => {
  const heading = {
    geomType,
    geomDimension,
    image,
    estName,
  };

  return heading;
};
