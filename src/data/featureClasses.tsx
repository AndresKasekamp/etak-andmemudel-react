import { createData, otherRegisterSources } from "./constantFields.tsx";
import { etakPunktobjektidDomains } from "./domains.tsx";

export const etakPunktobjektid = [
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
    domainTables: [
      etakPunktobjektidDomains.d0101,
      etakPunktobjektidDomains.kivi_tyyp,
      etakPunktobjektidDomains.vajalikkus,
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
    domainTables: [
      etakPunktobjektidDomains.vajalikkus, etakPunktobjektidDomains.d0103, etakPunktobjektidDomains.pinnavormP_tyyp
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
    domainTables: [
      etakPunktobjektidDomains.vajalikkus,
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
    domainTables: [
      etakPunktobjektidDomains.vajalikkus,
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
    domainTables: [
      etakPunktobjektidDomains.vajalikkus,
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
    domainTables: [
      etakPunktobjektidDomains.vajalikkus,
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
    domainTables: [
      etakPunktobjektidDomains.vajalikkus,
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
    domainTables: [
      etakPunktobjektidDomains.vajalikkus,
    ],
  },
];

export const etakJoonobjektid = [
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

export const etakPindobjektidMain = [
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
