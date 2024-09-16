import {
  createData,
  otherRegisterSources,
  generateKood,
  generateTyyp,
  generateKorgus,
  generateField,
  generateHeadingData,
} from "./constantFields.tsx";
import { etakPunktobjektidDomains } from "./domains.tsx";

export const etakPunktobjektid = [
  {
    fcName: "E_101_kivi_p",
    elements: [
      generateKood("0101"),
      generateTyyp("kivi_tyyp", "Kivi tüüp"),
      generateKorgus("Kaitsealuse üksiku kivi kõrgus maapinnast [m]", 3),
      generateField(otherRegisterSources.kmr_id, 13),
      generateField(otherRegisterSources.kkr_kood, 14),
      generateField(otherRegisterSources.nimetus, 15),
      generateField(otherRegisterSources.knr_id, 16),
    ],
    domainTables: [
      etakPunktobjektidDomains.d0101,
      etakPunktobjektidDomains.kivi_tyyp,
      etakPunktobjektidDomains.vajalikkus,
      etakPunktobjektidDomains.vajalikkus,
      etakPunktobjektidDomains.vajalikkus,
    ],
    headingData: generateHeadingData("punkt", "Kivi"),
  },

  {
    fcName: "E_103_pinnavorm_p",
    elements: [
      generateKood("0103"),
      generateTyyp("pinnavormP_tyyp", "Pinnavormi tüüp punktina"),
      generateField(otherRegisterSources.kmr_id, 12),
      generateField(otherRegisterSources.kkr_kood, 13),
      generateField(otherRegisterSources.nimetus, 14),
      generateField(otherRegisterSources.knr_id, 15),
    ],
    domainTables: [
      etakPunktobjektidDomains.vajalikkus,
      etakPunktobjektidDomains.d0103,
      etakPunktobjektidDomains.pinnavormP_tyyp,
    ],

    headingData: generateHeadingData("punkt", "Pinnavorm punktina"),
  },

  {
    fcName: "E_202_seisuveekogu_p",
    elements: [
      generateKood("0202"),
      generateTyyp("seisuveekogu_tyyp", "Seisuveekogu tüüp punktina"),
      generateField(otherRegisterSources.kmr_id, 12),
      generateField(otherRegisterSources.kkr_kood, 13),
      generateField(otherRegisterSources.nimetus, 14),
      generateField(otherRegisterSources.knr_id, 15),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Seisuveekogu punktina"),
  },

  {
    fcName: "E_301_muu_kolvik_p",
    elements: [
      generateKood("0301"),
      generateTyyp("muu_kolvikP_tyyp", "Muu kõlviku tüüp punktina"),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Muu kõlvik punktina"),
  },

  {
    fcName: "E_305_puittaimestik_p",
    elements: [
      generateKood("0305"),
      generateTyyp("puittaimestikP_tyyp", "Puittaimestiku tüüp punktina"),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Puittaimestik punktina"),
  },

  {
    fcName: "E_402_korgrajatis_p",
    elements: [
      generateKood("0402"),
      generateTyyp("korgrajatis_tyyp", "Kõrgrajatise tüüp"),
      generateKorgus("Kõrgrajatise kõrgus maapinnast [m]", 3),
      {
        row: createData(
          { name: "seos", color: "#FFFFFF" },
          "lühike täisarv",
          "korgrajatis_seos",
          "Kõrgrajatise seos hoonega"
        ),
        position: 4,
      },

      {
        row: createData(
          { name: "hoone", color: "#FFFFFF" },
          "täisarv",
          "",
          "Seotud hoone identifikaator"
        ),
        position: 5,
      },

      generateField(otherRegisterSources.kmr_id, 15),
      generateField(otherRegisterSources.ehr_gid, 16),
      generateField(otherRegisterSources.nimetus, 17),
      generateField(otherRegisterSources.knr_id, 18),
      generateField(otherRegisterSources.mark, 19),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Kõrgrajatis"),
  },

  {
    fcName: "E_403_muu_rajatis_p",
    elements: [
      generateKood("0403"),
      generateTyyp("muu_rajatisP_tyyp", "Muu rajatise tüüp punktina"),
      generateField(otherRegisterSources.kmr_id, 12),
      generateField(otherRegisterSources.ehr_gid, 13),
      generateField(otherRegisterSources.nimetus, 14),
      generateField(otherRegisterSources.knr_id, 15),
      generateField(otherRegisterSources.mark, 16),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Muu rajatis punktina"),
  },

  {
    fcName: "E_602_tehnopaigaldis_p",
    elements: [
      generateKood("0602"),
      generateTyyp("tehnopaigaldis_tyyp", "Tehnopaigaldise tüüp"),
      generateKorgus("Tehnopaigaldise kõrgus maapinnast [m", 3),
      generateField(otherRegisterSources.ehr_gid, 13),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Tehnopaigaldis"),
  },
];

export const etakJoonobjektid = [
  {
    fcName: "E_102_nolv_j",
    elements: [
      {
        row: createData(
          { name: "kood", color: "#FFFFFF" },
          "lühike täisarv",
          "0102",
          "Nähtuse kood ETAK reaalsusmudelis"
        ),
        position: 1,
      },

      {
        row: createData(
          { name: "tyyp", color: "#FFFFFF" },
          "lühike täisarv",
          "nolv_tyyp",
          "Kivi tüüp"
        ),
        position: 2,
      },

      {
        row: createData(
          { name: "korgus", color: "#FFFFFF" },
          "lühike täisarv",
          "",
          "Kaitsealuse üksiku kivi kõrgus täismeetrites"
        ),
        position: 3,
      },

      {
        row: otherRegisterSources.kmr_id,
        position: 13,
      },

      {
        row: otherRegisterSources.kkr_kood,
        position: 14,
      },

      {
        row: otherRegisterSources.nimetus,
        position: 15,
      },

      {
        row: otherRegisterSources.knr_id,
        position: 16,
      },
    ],
  },
];

export const etakPindobjektidOverlap = [
  {
    fcName: "E_101_kivi_p",
    elements: [
      {
        row: createData(
          { name: "kood", color: "#FFFFFF" },
          "lühike täisarv",
          "0101",
          "Nähtuse kood ETAK reaalsusmudelis"
        ),
        position: 1,
      },

      {
        row: createData(
          { name: "tyyp", color: "#FFFFFF" },
          "lühike täisarv",
          "kivi_tyyp",
          "Kivi tüüp"
        ),
        position: 2,
      },

      {
        row: createData(
          { name: "korgus", color: "#FFFFFF" },
          "lühike täisarv",
          "",
          "Kaitsealuse üksiku kivi kõrgus täismeetrites"
        ),
        position: 3,
      },

      {
        row: otherRegisterSources.kmr_id,
        position: 13,
      },

      {
        row: otherRegisterSources.kkr_kood,
        position: 14,
      },

      {
        row: otherRegisterSources.nimetus,
        position: 15,
      },

      {
        row: otherRegisterSources.knr_id,
        position: 16,
      },
    ],
  },

  {
    fcName: "E_103_pinnavorm_p",
    elements: [
      {
        row: createData(
          { name: "kood", color: "#FFFFFF" },
          "lühike täisarv",
          "0103",
          "Nähtuse kood ETAK reaalsusmudelis"
        ),
        position: 1,
      },

      {
        row: createData(
          { name: "tyyp", color: "#FFFFFF" },
          "lühike täisarv",
          "pinnavormP_tyyp",
          "Pinnavormi tüüp punktina"
        ),
        position: 2,
      },

      {
        row: otherRegisterSources.kmr_id,
        position: 12,
      },

      {
        row: otherRegisterSources.kkr_kood,
        position: 13,
      },

      {
        row: otherRegisterSources.nimetus,
        position: 14,
      },

      {
        row: otherRegisterSources.knr_id,
        position: 15,
      },
    ],
  },

  {
    fcName: "E_202_seisuveekogu_p",
    elements: [
      {
        row: createData(
          { name: "kood", color: "#FFFFFF" },
          "lühike täisarv",
          "0202",
          "Nähtuse kood ETAK reaalsusmudelis"
        ),
        position: 1,
      },

      {
        row: createData(
          { name: "tyyp", color: "#FFFFFF" },
          "lühike täisarv",
          "seisuveekogu_tyyp",
          "Seisuveekogu tüüp"
        ),
        position: 2,
      },

      {
        row: otherRegisterSources.kmr_id,
        position: 12,
      },

      {
        row: otherRegisterSources.kkr_kood,
        position: 13,
      },

      {
        row: otherRegisterSources.nimetus,
        position: 14,
      },

      {
        row: otherRegisterSources.knr_id,
        position: 15,
      },
    ],
  },

  {
    fcName: "E_301_muu_kolvik_p",
    elements: [
      {
        row: createData(
          { name: "kood", color: "#FFFFFF" },
          "lühike täisarv",
          "0301",
          "Nähtuse kood ETAK reaalsusmudelis"
        ),
        position: 1,
      },

      {
        row: createData(
          { name: "tyyp", color: "#FFFFFF" },
          "lühike täisarv",
          "muu_kolvikP_tyyp",
          "Muu kõlviku tüüp punktina"
        ),
        position: 2,
      },
    ],
  },

  {
    fcName: "E_305_puittaimestik_p",
    elements: [
      {
        row: createData(
          { name: "kood", color: "#FFFFFF" },
          "lühike täisarv",
          "0305",
          "Nähtuse kood ETAK reaalsusmudelis"
        ),
        position: 1,
      },

      {
        row: createData(
          { name: "tyyp", color: "#FFFFFF" },
          "lühike täisarv",
          "puittaimestikP_tyyp",
          "Puittaimestiku tüüp punktina"
        ),
        position: 2,
      },
    ],
  },

  {
    fcName: "E_402_korgrajatis_p",
    elements: [
      {
        row: createData(
          { name: "kood", color: "#FFFFFF" },
          "lühike täisarv",
          "0305",
          "Nähtuse kood ETAK reaalsusmudelis"
        ),
        position: 1,
      },

      {
        row: createData(
          { name: "tyyp", color: "#FFFFFF" },
          "lühike täisarv",
          "puittaimestikP_tyyp",
          "Puittaimestiku tüüp punktina"
        ),
        position: 2,
      },

      {
        row: createData(
          { name: "korgus", color: "#FFFFFF" },
          "lühike täisarv",
          "",
          "Kõrgrajatise kõrgus maapinnast täismeetrites"
        ),
        position: 3,
      },

      {
        row: createData(
          { name: "seos", color: "#FFFFFF" },
          "lühike täisarv",
          "korgrajatis_seos",
          "Kõrgrajatise seos hoonega"
        ),
        position: 4,
      },

      {
        row: createData(
          { name: "hoone", color: "#FFFFFF" },
          "täisarv",
          "",
          "Seotud hoone identifikaator"
        ),
        position: 4,
      },
    ],
  },

  {
    fcName: "E_403_muu_rajatis_p",
    elements: [
      {
        row: createData(
          { name: "korgus", color: "#FFFFFF" },
          "lühike täisarv",
          "",
          "Kaitsealuse üksiku kivi kõrgus täismeetrites"
        ),
        position: 5,
      },
    ],
  },

  {
    fcName: "E_602_tehnopaigaldis_p",
    elements: [
      {
        row: createData(
          { name: "korgus", color: "#FFFFFF" },
          "lühike täisarv",
          "",
          "Kaitsealuse üksiku kivi kõrgus täismeetrites"
        ),
        position: 5,
      },
    ],
  },
];

export const metadata = [
  {
    fcName: "alusdokument",
    elements: [],
  },
];

export const derivedLayers = [
  {
    fcName: "vooluveed_kkr",
    elements: [],
  },
];
