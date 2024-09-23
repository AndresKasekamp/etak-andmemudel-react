import {
  otherRegisterSources,
  generateKood,
  generateTyyp,
  generateKorgus,
  generateField,
  generateHeadingData,
  generateMetadataFields,
  generatedDerivedDataFields,
  createData,
} from "./constantFields.tsx";
import {
  etakPunktobjektidDomains,
  metadataDomains,
  sharedDomains,
} from "./domains.tsx";
import etak_kirjeldus from "./etak_kirjeldus.json" assert { type: "json" };
import { MainCategory } from "./colors.ts";
import {
  SHORT_INTEGER,
  INTEGER,
  POINT_GEOMETRY,
  POLY_GEOMETRY,
} from "./dataTypes.ts";

// import { pointImageSource } from "./imageSources.tsx";

import pointImageSource from "../assets/multipoint.svg"
import polyImageSource from "../assets/polygon-hole-o.svg";

export const etakPunktobjektid = [
  {
    fcName: etak_kirjeldus.classes.E_101_kivi_p.name,
    elements: {
      etak: [
        generateKood(sharedDomains.d0101.name),
        generateTyyp(etakPunktobjektidDomains.kivi_tyyp.name, {
          desc: etak_kirjeldus.classes.E_101_kivi_p.fields.tyyp.description.et,
          hyperlink: null,
        }),

        generateKorgus({
          desc: etak_kirjeldus.classes.E_101_kivi_p.fields.korgus.description
            .et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.kmr_id),
        generateField(otherRegisterSources.kkr_kood),
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
      ],
    },

    domainTables: [
      sharedDomains.d0101,
      etakPunktobjektidDomains.kivi_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_101_kivi_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_103_pinnavorm_p.name,
    elements: {
      etak: [
        generateKood(sharedDomains.d0103.name),

        generateTyyp(etakPunktobjektidDomains.pinnavormP_tyyp.name, {
          desc: etak_kirjeldus.classes.E_103_pinnavorm_p.fields.tyyp.description
            .et,
          hyperlink: null,
        }),
      ],
      register: [
        generateField(otherRegisterSources.kmr_id),
        generateField(otherRegisterSources.kkr_kood),
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
      ],
    },

    domainTables: [
      sharedDomains.vajalikkus,
      sharedDomains.d0103,
      etakPunktobjektidDomains.pinnavormP_tyyp,
    ],

    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_103_pinnavorm_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_202_seisuveekogu_p.name,
    elements: {
      etak: [
        generateKood(sharedDomains.d0202.name),

        generateTyyp(etakPunktobjektidDomains.seisuveekoguP_tyyp.name, {
          desc: etak_kirjeldus.classes.E_202_seisuveekogu_p.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],
      register: [
        generateField(otherRegisterSources.kmr_id),
        generateField(otherRegisterSources.kkr_kood),
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
      ],
    },

    domainTables: [
      sharedDomains.vajalikkus,
      sharedDomains.d0202,
      etakPunktobjektidDomains.pinnavormP_tyyp,
    ],

    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_202_seisuveekogu_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_301_muu_kolvik_p.name,
    elements: {
      etak: [
        generateKood(sharedDomains.d0301.name),
        generateTyyp(etakPunktobjektidDomains.muu_kolvikP_tyyp.name, {
          desc: etak_kirjeldus.classes.E_301_muu_kolvik_p.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.kmr_id),
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
      ],
    },

    domainTables: [
      sharedDomains.d0301,
      etakPunktobjektidDomains.kivi_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_301_muu_kolvik_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_305_puittaimestik_p.name,
    elements: {
      etak: [
        generateKood(sharedDomains.d0305.name),
        generateTyyp(etakPunktobjektidDomains.puittaimestikP_tyyp.name, {
          desc: etak_kirjeldus.classes.E_305_puittaimestik_p.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.kmr_id),
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.kkr_kood),
      ],
    },

    domainTables: [
      sharedDomains.d0305,
      etakPunktobjektidDomains.puittaimestikP_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_305_puittaimestik_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_402_korgrajatis_p.name,
    elements: {
      etak: [
        generateKood(sharedDomains.d0402.name),
        generateTyyp(etakPunktobjektidDomains.korgrajatis_tyyp.name, {
          desc: etak_kirjeldus.classes.E_402_korgrajatis_p.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
        generateKorgus({
          desc: etak_kirjeldus.classes.E_402_korgrajatis_p.fields.korgus
            .description.et,
          hyperlink: null,
        }),
        {
          row: createData(
            { name: "seos", category: MainCategory },
            SHORT_INTEGER,
            etakPunktobjektidDomains.korgrajatis_seos.name,
            {
              desc: "Kõrgrajatise seos hoonega",
              hyperlink: null,
            }
          ),
        },

        {
          row: createData(
            { name: "hoone", category: MainCategory },
            INTEGER,
            "",
            {
              desc: "Seotud hoone identifikaator",
              hyperlink: null,
            }
          ),
        },
      ],

      register: [
        generateField(otherRegisterSources.kmr_id),
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.mark),
        generateField(otherRegisterSources.ehr_gid),
      ],
    },

    domainTables: [
      sharedDomains.d0402,
      etakPunktobjektidDomains.korgrajatis_tyyp,
      etakPunktobjektidDomains.korgrajatis_seos,
      sharedDomains.vajalikkus,
      sharedDomains.toevaartus,
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_402_korgrajatis_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_403_muu_rajatis_p.name,
    elements: {
      etak: [
        generateKood(sharedDomains.d0403.name),
        generateTyyp(etakPunktobjektidDomains.muu_rajatisP_tyyp.name, {
          desc: etak_kirjeldus.classes.E_403_muu_rajatis_p.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.kmr_id),
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.mark),
        generateField(otherRegisterSources.ehr_gid),
      ],
    },

    domainTables: [
      sharedDomains.d0403,
      etakPunktobjektidDomains.muu_rajatisP_tyyp,
      sharedDomains.vajalikkus,
      sharedDomains.toevaartus,
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_403_muu_rajatis_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_602_tehnopaigaldis_p.name,
    elements: {
      etak: [
        generateKood(sharedDomains.d0602.name),
        generateTyyp(etakPunktobjektidDomains.tehnopaigaldis_tyyp.name, {
          desc: etak_kirjeldus.classes.E_602_tehnopaigaldis_p.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [generateField(otherRegisterSources.ehr_gid)],
    },

    domainTables: [
      sharedDomains.d0602,
      etakPunktobjektidDomains.tehnopaigaldis_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_602_tehnopaigaldis_p.description.et,
      pointImageSource
    ),
  },
];

export const etakJoonobjektid = [];

export const etakPindobjektidOverlap = [];

export const metadata = [
  {
    fcName: etak_kirjeldus.classes.alusdokument.name,
    elements: {
      etak: generateMetadataFields(),
      register: []
    },
    domainTables: [
      metadataDomains.alusdokument_tyyp,
      metadataDomains.tapsusklass_xy,
      metadataDomains.tapsusklass_z,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.alusdokument.description.et,
      polyImageSource,
      2
    ),
  },
];

export const derivedLayers = [
  {
    fcName: "vooluveed_kkr",
    elements: {
      etak: generatedDerivedDataFields(),
      register: [
        generateField(otherRegisterSources.kkr_kood),
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
      ],
    },
    domainTables: [],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      "Vooluvete tervikkujud (põhiteljed) Eesti looduse infosüsteemis",
      polyImageSource,
      2.5
    ),
  },
];
