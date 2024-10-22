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
  generateToevaartus,
} from "./constantFields.tsx";
import {
  etakPunktobjektidDomains,
  etakPindobjektidOverlapDomains,
  etakPindobjektidMainDomains,
  etakJoonobjektidDomains,
  metadataDomains,
  sharedDomains,
} from "./domains.tsx";

import { MainCategory } from "./colors.ts";
import {
  SHORT_INTEGER,
  INTEGER,
  POINT_GEOMETRY,
  POLY_GEOMETRY,
  LINE_GEOMETRY,
} from "./dataTypes.ts";

import pointImageSource from "../assets/multipoint.svg";
import polyImageSource from "../assets/polygon-hole-o.svg";
import lineImageSource from "../assets/polyline-pt.svg";

import {
  pointPath,
  metadataPath,
  derivedPath,
  linePath,
  polyPath,
} from "../pages/groupPaths.ts";

import etak_kirjeldus from "./etak_kirjeldus.json" assert { type: "json" };

import { domainFinder } from "./domains.tsx";

export const etakPunktobjektid = [
  {
    fcName: etak_kirjeldus.classes.E_101_kivi_p.name,
    groupName: pointPath,
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
      domainFinder("0101"),
      domainFinder("kivi_tyyp"),
      domainFinder("vajalikkus"),
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_101_kivi_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_103_pinnavorm_p.name,
    groupName: pointPath,
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
      domainFinder("0103"),
      domainFinder("pinnavormP_tyyp"),
      domainFinder("vajalikkus"),
    ],

    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_103_pinnavorm_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_202_seisuveekogu_p.name,
    groupName: pointPath,
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
      domainFinder("0202"),
      domainFinder("vajalikkus"),
      domainFinder("seisuveekoguP_tyyp"),
    ],

    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_202_seisuveekogu_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_301_muu_kolvik_p.name,
    groupName: pointPath,
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
      domainFinder("0301"),
      domainFinder("kivi_tyyp"),
      domainFinder("vajalikkus"),
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_301_muu_kolvik_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_305_puittaimestik_p.name,
    groupName: pointPath,
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
      domainFinder("0305"),
      domainFinder("puittaimestikP_tyyp"),
      domainFinder("vajalikkus"),
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_305_puittaimestik_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_402_korgrajatis_p.name,
    groupName: pointPath,
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
      domainFinder("0402"),
      domainFinder("korgrajatis_tyyp"),
      domainFinder("korgrajatis_seos"),
      domainFinder("vajalikkus"),
      domainFinder("toevaartus"),
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_402_korgrajatis_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_403_muu_rajatis_p.name,
    groupName: pointPath,
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
      domainFinder("0403"),
      domainFinder("muu_rajatisP_tyyp"),
      domainFinder("vajalikkus"),
      domainFinder("toevaartus"),
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_403_muu_rajatis_p.description.et,
      pointImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_602_tehnopaigaldis_p.name,
    groupName: pointPath,
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
      domainFinder("0602"),
      domainFinder("tehnopaigaldis_tyyp"),
      domainFinder("vajalikkus"),
    ],
    headingData: generateHeadingData(
      POINT_GEOMETRY,
      etak_kirjeldus.classes.E_602_tehnopaigaldis_p.description.et,
      pointImageSource
    ),
  },
];

export const etakJoonobjektid = [
  {
    fcName: etak_kirjeldus.classes.E_102_nolv_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0102.name),
        generateTyyp(etakJoonobjektidDomains.nolv_tyyp.name, {
          desc: etak_kirjeldus.classes.E_102_nolv_j.fields.tyyp.description.et,
          hyperlink: null,
        }),

        generateToevaartus("kaldaastang", {
          desc: etak_kirjeldus.classes.E_102_nolv_j.fields.kaldaastang
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
      ],
    },

    domainTables: [
      sharedDomains.d0102,
      etakJoonobjektidDomains.nolv_tyyp,
      sharedDomains.vajalikkus,
      sharedDomains.toevaartus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_102_nolv_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_103_pinnavorm_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0103.name),
        generateTyyp(etakJoonobjektidDomains.pinnavormJ_tyyp.name, {
          desc: etak_kirjeldus.classes.E_103_pinnavorm_j.fields.tyyp.description
            .et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
      ],
    },

    domainTables: [
      sharedDomains.d0103,
      etakJoonobjektidDomains.pinnavormJ_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_103_pinnavorm_j.description.et,
      lineImageSource
    ),
  },

  // TODO see on veits puudulik (liiga palju asju)
  {
    fcName: etak_kirjeldus.classes.E_203_vooluveekogu_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0203.name),
        generateTyyp(etakJoonobjektidDomains.vooluveekogu_tyyp.name, {
          desc: etak_kirjeldus.classes.E_203_vooluveekogu_j.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.kkr_kood),
        generateField(otherRegisterSources.mps_id),
      ],
    },

    domainTables: [
      sharedDomains.d0203,
      etakJoonobjektidDomains.vooluveekogu_tyyp,
      etakJoonobjektidDomains.vooluveekogu_telje_tyyp,
      etakJoonobjektidDomains.vooluveekogu_laius,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_203_vooluveekogu_j.description.et,
      lineImageSource
    ),
  },

  // TODO roobastee_tahtsus on puudu
  {
    fcName: etak_kirjeldus.classes.E_204_kaldajoon_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0204.name),
        generateTyyp(etakJoonobjektidDomains.kaldajoon_tyyp.name, {
          desc: etak_kirjeldus.classes.E_204_kaldajoon_j.fields.tyyp.description
            .et,
          hyperlink: null,
        }),

        generateToevaartus("halduspiir", {
          desc: etak_kirjeldus.classes.E_204_kaldajoon_j.fields.halduspiir
            .description.et,
          hyperlink: null,
        }),

        {
          row: createData(
            { name: "kalda_veekogu_tyyp", category: MainCategory },
            SHORT_INTEGER,
            etakJoonobjektidDomains.kaldajoon_veekogu_tyyp.name,
            {
              desc: "Kaldajoonega piirneva veekogu tüüp",
              hyperlink: null,
            }
          ),
        },
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0204,
      etakJoonobjektidDomains.kaldajoon_tyyp,
      etakJoonobjektidDomains.kaldajoon_veekogu_tyyp,
      sharedDomains.vajalikkus,
      sharedDomains.toevaartus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_204_kaldajoon_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_205_hudrotehniline_rajatis_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0205.name),
        generateTyyp(etakJoonobjektidDomains.hudrotehniline_rajatis_tyyp.name, {
          desc: etak_kirjeldus.classes.E_205_hudrotehniline_rajatis_j.fields
            .tyyp.description.et,
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0205,
      etakJoonobjektidDomains.hudrotehniline_rajatis_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_205_hudrotehniline_rajatis_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_206_truup_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0206.name),
        generateTyyp(etakJoonobjektidDomains.truup_tyyp.name, {
          desc: etak_kirjeldus.classes.E_206_truup_j.fields.tyyp.description.et,
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0206,
      etakJoonobjektidDomains.truup_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_206_truup_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_305_puittaimestik_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0305.name),
        generateTyyp(etakJoonobjektidDomains.puittaimestikJ_tyyp.name, {
          desc: etak_kirjeldus.classes.E_305_puittaimestik_j.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [generateField(otherRegisterSources.kmr_id)],
    },

    domainTables: [
      sharedDomains.d0305,
      etakJoonobjektidDomains.puittaimestikJ_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_305_puittaimestik_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_405_piire_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0405.name),
        generateTyyp(etakJoonobjektidDomains.piire_tyyp.name, {
          desc: etak_kirjeldus.classes.E_405_piire_j.fields.tyyp.description.et,
          hyperlink: null,
        }),

        generateToevaartus("puittaimed", {
          desc: etak_kirjeldus.classes.E_405_piire_j.fields.puittaimed
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [generateField(otherRegisterSources.kmr_id)],
    },

    domainTables: [
      sharedDomains.d0405,
      etakJoonobjektidDomains.piire_tyyp,
      sharedDomains.vajalikkus,
      sharedDomains.toevaartus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_405_piire_j.description.et,
      lineImageSource
    ),
  },

  // TODO E_501_tee_j on praegu liiga raske
  {
    fcName: etak_kirjeldus.classes.E_502_roobastee_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0502.name),
        generateTyyp(etakJoonobjektidDomains.roobastee_tyyp.name, {
          desc: etak_kirjeldus.classes.E_502_roobastee_j.fields.tyyp.description
            .et,
          hyperlink: null,
        }),

        generateToevaartus("elekter", {
          desc: etak_kirjeldus.classes.E_502_roobastee_j.fields.elekter
            .description.et,
          hyperlink: null,
        }),

        {
          row: createData(
            { name: "tahtsus", category: MainCategory },
            SHORT_INTEGER,
            etakJoonobjektidDomains.roobastee_tahtsus.name,
            {
              desc: etak_kirjeldus.classes.E_502_roobastee_j.fields.tahtsus
                .description.et,
              hyperlink: null,
            }
          ),
        },
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0502,
      etakJoonobjektidDomains.roobastee_tyyp,
      etakJoonobjektidDomains.roobastee_tahtsus,
      sharedDomains.vajalikkus,
      sharedDomains.toevaartus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_502_roobastee_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_503_siht_j.name,
    groupName: linePath,
    elements: {
      etak: [generateKood(sharedDomains.d0503.name)],

      register: [],
    },

    domainTables: [sharedDomains.d0502, sharedDomains.vajalikkus],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_503_siht_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_505_liikluskorralduslik_rajatis_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0505.name),

        generateTyyp(
          etakJoonobjektidDomains.liikluskorralduslik_rajatisJ_tyyp.name,
          {
            desc: etak_kirjeldus.classes.E_505_liikluskorralduslik_rajatis_j
              .fields.tyyp.description.et,
            hyperlink: null,
          }
        ),

        {
          row: createData(
            { name: "toke", category: MainCategory },
            SHORT_INTEGER,
            etakJoonobjektidDomains.liikluskorralduslik_rajatis_suletus.name,
            {
              desc: "Sõidutakistuse iseloom",
              hyperlink: null,
            }
          ),
        },
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0505,
      sharedDomains.vajalikkus,
      etakJoonobjektidDomains.liikluskorralduslik_rajatisJ_tyyp,
      etakJoonobjektidDomains.liikluskorralduslik_rajatis_suletus,
    ],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_505_liikluskorralduslik_rajatis_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_601_elektriliin_j.name,
    groupName: linePath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0601.name),

        {
          row: createData(
            { name: "nimpinge", category: MainCategory },
            SHORT_INTEGER,
            "",
            {
              desc: "Elektriliini nimipinge [kV]",
              hyperlink: null,
            }
          ),
        },
      ],

      register: [generateField(otherRegisterSources.ehr_gid)],
    },

    domainTables: [sharedDomains.d0601, sharedDomains.vajalikkus],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_601_elektriliin_j.description.et,
      lineImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_603_torujuhe_j.name,
    groupName: linePath,
    elements: {
      etak: [generateKood(sharedDomains.d0603.name)],

      register: [generateField(otherRegisterSources.ehr_gid)],
    },

    domainTables: [sharedDomains.d0603, sharedDomains.vajalikkus],
    headingData: generateHeadingData(
      LINE_GEOMETRY,
      etak_kirjeldus.classes.E_603_torujuhe_j.description.et,
      lineImageSource
    ),
  },
];

export const etakPindobjektidOverlap = [
  {
    fcName: etak_kirjeldus.classes.E_301_muu_kolvik_ka.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0301.name),
        generateTyyp(etakPindobjektidOverlapDomains.muu_kolvikKA_tyyp.name, {
          desc: etak_kirjeldus.classes.E_301_muu_kolvik_ka.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.kmr_id),
      ],
    },

    domainTables: [
      sharedDomains.d0301,
      etakPindobjektidOverlapDomains.muu_kolvikKA_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_301_muu_kolvik_ka.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_306_margala_ka.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0306.name),
        generateTyyp(etakPindobjektidOverlapDomains.margalaKA_tyyp.name, {
          desc: etak_kirjeldus.classes.E_306_margala_ka.fields.tyyp.description
            .et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.kmr_id),
      ],
    },

    domainTables: [
      sharedDomains.d0306,
      etakPindobjektidOverlapDomains.margalaKA_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_306_margala_ka.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_401_hoone_ka.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0401.name),
        generateTyyp(etakPindobjektidOverlapDomains.hoone_tyyp.name, {
          desc: etak_kirjeldus.classes.E_401_hoone_ka.fields.tyyp.description
            .et,
          hyperlink: null,
        }),

        {
          row: createData(
            { name: "korgus_m", category: MainCategory },
            SHORT_INTEGER,
            "",
            {
              desc: "Hoone maksimaalne kõrgus maapinnast [m]",
              hyperlink: null,
            }
          ),
        },
      ],

      register: [
        generateField(otherRegisterSources.ehr_gid),
        generateField(otherRegisterSources.ads_oid),
        generateField(otherRegisterSources.ads_lahiaadress),
        generateField(otherRegisterSources.kov_id),
      ],
    },

    domainTables: [
      sharedDomains.d0401,
      etakPindobjektidOverlapDomains.hoone_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_401_hoone_ka.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_403_muu_rajatis_ka.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0403.name),
        generateTyyp(etakPindobjektidOverlapDomains.muu_rajatisKA_tyyp.name, {
          desc: etak_kirjeldus.classes.E_403_muu_rajatis_ka.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.ehr_gid),

        generateField(otherRegisterSources.kov_id),
      ],
    },

    domainTables: [
      sharedDomains.d0403,
      etakPindobjektidOverlapDomains.muu_rajatisKA_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_403_muu_rajatis_ka.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_404_maaalune_hoone_ka.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0404.name),
        generateTyyp(etakPindobjektidOverlapDomains.maaalune_hoone_tyyp.name, {
          desc: etak_kirjeldus.classes.E_404_maaalune_hoone_ka.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.ehr_gid),
        generateField(otherRegisterSources.ads_oid),
        generateField(otherRegisterSources.ads_lahiaadress),

        generateField(otherRegisterSources.kov_id),
      ],
    },

    domainTables: [
      sharedDomains.d0404,
      etakPindobjektidOverlapDomains.maaalune_hoone_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_404_maaalune_hoone_ka.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_404_maaalune_hoone_ka.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0404.name),
        generateTyyp(etakPindobjektidOverlapDomains.maaalune_hoone_tyyp.name, {
          desc: etak_kirjeldus.classes.E_404_maaalune_hoone_ka.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [
        generateField(otherRegisterSources.ehr_gid),
        generateField(otherRegisterSources.ads_oid),
        generateField(otherRegisterSources.ads_lahiaadress),

        generateField(otherRegisterSources.kov_id),
      ],
    },

    domainTables: [
      sharedDomains.d0404,
      etakPindobjektidOverlapDomains.maaalune_hoone_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_404_maaalune_hoone_ka.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_505_liikluskorralduslik_rajatis_ka.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0505.name),
        generateTyyp(
          etakPindobjektidOverlapDomains.liikluskorralduslik_rajatisKA_tyyp
            .name,
          {
            desc: etak_kirjeldus.classes.E_505_liikluskorralduslik_rajatis_ka
              .fields.tyyp.description.et,
            hyperlink: null,
          }
        ),
      ],

      register: [
        generateField(otherRegisterSources.kmr_id),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.nimetus),
      ],
    },

    domainTables: [
      sharedDomains.d0505,
      etakPindobjektidOverlapDomains.liikluskorralduslik_rajatisKA_tyyp,
      sharedDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_505_liikluskorralduslik_rajatis_ka.description
        .et,
      polyImageSource
    ),
  },
];

export const etakPindobjektidMain = [
  {
    fcName: etak_kirjeldus.classes.E_201_meri_a.name,
    groupName: polyPath,
    elements: {
      etak: [generateKood(sharedDomains.d0201.name)],

      register: [],
    },

    domainTables: [sharedDomains.d0201, sharedDomains.vajalikkus],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_201_meri_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_202_seisuveekogu_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0202.name),
        generateTyyp(etakPindobjektidMainDomains.seisuveekogu_tyyp.name, {
          desc: etak_kirjeldus.classes.E_202_seisuveekogu_a.fields.tyyp
            .description.et,
          hyperlink: null,
        }),

        {
          row: createData(
            { name: "kpo_seos", category: MainCategory },
            SHORT_INTEGER,
            etakPindobjektidMainDomains.seisuveekogu_kpo.name,
            {
              desc: "Seisuveekogu käsitlus",
              hyperlink: null,
            }
          ),
        },
      ],

      register: [
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.kkr_kood),
      ],
    },

    domainTables: [
      sharedDomains.d0202,
      sharedDomains.vajalikkus,
      etakPindobjektidMainDomains.seisuveekogu_tyyp,
      etakPindobjektidMainDomains.seisuveekogu_kpo,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_202_seisuveekogu_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_203_vooluveekogu_a.name,
    groupName: polyPath,
    elements: {
      etak: [generateKood(sharedDomains.d0203.name)],

      register: [
        generateField(otherRegisterSources.nimetus),
        generateField(otherRegisterSources.knr_id),
        generateField(otherRegisterSources.kkr_kood),
        generateField(otherRegisterSources.mps_id),
      ],
    },

    domainTables: [sharedDomains.d0203, sharedDomains.vajalikkus],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_203_vooluveekogu_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_301_muu_kolvik_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0301.name),
        generateTyyp(etakPindobjektidMainDomains.muu_kolvikA_tyyp.name, {
          desc: etak_kirjeldus.classes.E_301_muu_kolvik_a.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0301,
      sharedDomains.vajalikkus,
      etakPindobjektidMainDomains.muu_kolvikA_tyyp,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_301_muu_kolvik_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_302_ou_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0302.name),
        generateTyyp(etakPindobjektidMainDomains.ou_tyyp.name, {
          desc: etak_kirjeldus.classes.E_302_ou_a.fields.tyyp.description.et,
          hyperlink: null,
        }),

        {
          row: createData(
            { name: "kasutus", category: MainCategory },
            SHORT_INTEGER,
            etakPindobjektidMainDomains.ou_kasutus.name,
            {
              desc: "Tootmisõue erijuht",
              hyperlink: null,
            }
          ),
        },
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0302,
      sharedDomains.vajalikkus,
      etakPindobjektidMainDomains.ou_tyyp,
      etakPindobjektidMainDomains.ou_kasutus,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_302_ou_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_303_haritav_maa_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0303.name),
        generateTyyp(etakPindobjektidMainDomains.haritav_maa_tyyp.name, {
          desc: etak_kirjeldus.classes.E_303_haritav_maa_a.fields.tyyp
            .description.et,
          hyperlink: null,
        }),

        generateToevaartus("puis", {
          desc: "Puittaimestiku olemasolu",
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0303,
      sharedDomains.vajalikkus,
      sharedDomains.toevaartus,
      etakPindobjektidMainDomains.haritav_maa_tyyp,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_303_haritav_maa_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_304_lage_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0304.name),
        generateTyyp(etakPindobjektidMainDomains.lage_tyyp.name, {
          desc: etak_kirjeldus.classes.E_304_lage_a.fields.tyyp.description.et,
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0304,
      sharedDomains.vajalikkus,
      etakPindobjektidMainDomains.lage_tyyp,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_304_lage_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_305_puittaimestik_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0305.name),
        generateTyyp(etakPindobjektidMainDomains.puittaimestikA_tyyp.name, {
          desc: etak_kirjeldus.classes.E_305_puittaimestik_a.fields.tyyp
            .description.et,
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0305,
      sharedDomains.vajalikkus,
      etakPindobjektidMainDomains.puittaimestikA_tyyp,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_305_puittaimestik_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_306_margala_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0306.name),
        generateTyyp(etakPindobjektidMainDomains.margalaA_tyyp.name, {
          desc: etak_kirjeldus.classes.E_306_margala_a.fields.tyyp.description
            .et,
          hyperlink: null,
        }),
        generateToevaartus("puis", {
          desc: "Puittaimestiku olemasolu",
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0306,
      sharedDomains.vajalikkus,
      sharedDomains.toevaartus,
      etakPindobjektidMainDomains.margalaA_tyyp,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_306_margala_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_307_turbavali_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0307.name),
        generateTyyp(etakPindobjektidMainDomains.turbavali_tyyp.name, {
          desc: etak_kirjeldus.classes.E_307_turbavali_a.fields.tyyp.description
            .et,
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0307,
      sharedDomains.vajalikkus,
      etakPindobjektidMainDomains.turbavali_tyyp,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_307_turbavali_a.description.et,
      polyImageSource
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_501_tee_a.name,
    groupName: polyPath,
    elements: {
      etak: [
        generateKood(sharedDomains.d0501.name),
        generateTyyp(etakPindobjektidMainDomains.teeA_tyyp.name, {
          desc: etak_kirjeldus.classes.E_501_tee_a.fields.tyyp.description.et,
          hyperlink: null,
        }),
      ],

      register: [],
    },

    domainTables: [
      sharedDomains.d0501,
      sharedDomains.vajalikkus,
      etakPindobjektidMainDomains.teeA_tyyp,
    ],
    headingData: generateHeadingData(
      POLY_GEOMETRY,
      etak_kirjeldus.classes.E_501_tee_a.description.et,
      polyImageSource
    ),
  },
];

export const metadata = [
  {
    fcName: etak_kirjeldus.classes.alusdokument.name,
    groupName: metadataPath,
    elements: {
      etak: generateMetadataFields(),
      register: [],
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
    groupName: derivedPath,
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
