import { createData, otherRegisterSources } from "../components/Helpers";

export const etakPunktobjektid = [
  "E_101_kivi_p",
  "E_103_pinnavorm_p",
  "E_202_seisuveekogu_p",
  "E_301_muu_kolvik_p",
  "E_305_puittaimestik_p",
  "E_402_korgrajatis_p",
  "E_403_muu_rajatis_p",
  "E_602_tehnopaigaldis_p",
];

export const etakPunktobjektid2 = [
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

export const etakJoonobjektid = [
  "E_102_nolv_j",
  "E_103_pinnavorm_j",
  "E_202_vooluveekogu_j",
  "E_204_kaldajoon_j",
  "E_205_hudrotehniline_rajatis_j",
  "E_206_truup_j",
  "E_305_puittaimestik_j",
  "E_405_piire_j",
  "E_501_tee_j",
  "E_502_roobastee_j",
  "E_503_siht_j",
  "E_505_liikluskorralduslik_rajatis_j",
  "E_601_elektriliin_j",
  "E_603_torujuhe_j",
];

export const etakPindobjektidMain = [
  "E_201_meri_a",
  "E_202_seisuveekogu_a",
  "E_203_vooluveekogu_a",
  "E_301_muu_kolvik_a",
  "E_302_ou_a",
  "E_303_haritav_maa_a",
  "E_304_lage_a",
  "E_305_puittaimestik_a",
  "E_306_margala_a",
  "E_307_turbavali_a",
  "E_501_tee_a",
];

export const etakPindobjektidOverlap = [
  "E_301_muu_kolvik_ka",
  "E_306_margala_ka",
  "E_401_hoone_ka",
  "E_403_muu_rajatis_ka",
  "E_404_maaalune_hoone_ka",
  "E_505_liikluskorralduslik_rajatis_ka",
];
