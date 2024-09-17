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
import etak_kirjeldus from "./etak_kirjeldus.json" assert { type: "json" };

export const etakPunktobjektid = [
  {
    fcName: etak_kirjeldus.classes.E_101_kivi_p.name,
    elements: [
      generateKood(etakPunktobjektidDomains.d0101.name),
      generateTyyp(etakPunktobjektidDomains.kivi_tyyp.name, {
        desc: etak_kirjeldus.classes.E_101_kivi_p.fields.tyyp.description.et,
        hyperlink: null,
      }),
      generateKorgus(
        {
          desc: etak_kirjeldus.classes.E_101_kivi_p.fields.korgus.description
            .et,
          hyperlink: null,
        },
        3
      ),
      generateField(otherRegisterSources.kmr_id, 13),
      generateField(otherRegisterSources.kkr_kood, 14),
      generateField(otherRegisterSources.nimetus, 15),
      generateField(otherRegisterSources.knr_id, 16),
    ],
    domainTables: [
      etakPunktobjektidDomains.d0101,
      etakPunktobjektidDomains.kivi_tyyp,
      etakPunktobjektidDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      "punkt",
      etak_kirjeldus.classes.E_101_kivi_p.description.et
    ),
  },

  {
    fcName: "E_103_pinnavorm_p",
    elements: [
      generateKood("0103"),
      generateTyyp("pinnavormP_tyyp", {
        desc: "Pinnavormi tüüp punktina",
        hyperlink: null,
      }),
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
      generateTyyp("seisuveekogu_tyyp", {
        desc: "Seisuveekogu tüüp punktina",
        hyperlink: null,
      }),
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
      generateTyyp("muu_kolvikP_tyyp", {
        desc: "Muu kõlviku tüüp punktina",
        hyperlink: null,
      }),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Muu kõlvik punktina"),
  },

  {
    fcName: "E_305_puittaimestik_p",
    elements: [
      generateKood("0305"),
      generateTyyp("puittaimestikP_tyyp", {
        desc: "Puittaimestiku tüüp punktina",
        hyperlink: null,
      }),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Puittaimestik punktina"),
  },

  {
    fcName: "E_402_korgrajatis_p",
    elements: [
      generateKood("0402"),
      generateTyyp("korgrajatis_tyyp", {
        desc: "Kõrgrajatise tüüp",
        hyperlink: null,
      }),
      generateKorgus(
        {
          desc: "Kõrgrajatise kõrgus maapinnast [m]",
          hyperlink: null,
        },
        3
      ),
      {
        row: createData(
          { name: "seos", color: "#FFFFFF" },
          "lühike täisarv",
          "korgrajatis_seos",
          {
            desc: "Kõrgrajatise seos hoonega",
            hyperlink: null,
          }
        ),
        position: 4,
      },

      {
        row: createData({ name: "hoone", color: "#FFFFFF" }, "täisarv", "", {
          desc: "Seotud hoone identifikaator",

          hyperlink: null,
        }),
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
      generateTyyp("muu_rajatisP_tyyp", {
        desc: "Muu rajatise tüüp punktina",
        hyperlink: null,
      }),
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
      generateTyyp("tehnopaigaldis_tyyp", {
        desc: "Tehnopaigaldise tüüp",
        hyperlink: null,
      }),
      generateKorgus(
        {
          desc: "Tehnopaigaldise kõrgus maapinnast [m]",
          hyperlink: null,
        },
        3
      ),
      generateField(otherRegisterSources.ehr_gid, 13),
    ],
    domainTables: [etakPunktobjektidDomains.vajalikkus],
    headingData: generateHeadingData("punkt", "Tehnopaigaldis"),
  },
];

export const etakJoonobjektid = [

];

export const etakPindobjektidOverlap = [

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
