import {
  otherRegisterSources,
  generateKood,
  generateTyyp,
  generateKorgus,
  generateField,
  generateHeadingData,
  generateDataFields,
} from "./constantFields.tsx";
import { etakPunktobjektidDomains, metadataDomains } from "./domains.tsx";
import etak_kirjeldus from "./etak_kirjeldus.json" assert { type: "json" };

export const etakPunktobjektid = [
  {
    fcName: etak_kirjeldus.classes.E_101_kivi_p.name,
    elements: {
      etak: [
        generateKood(etakPunktobjektidDomains.d0101.name),
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
    fcName: etak_kirjeldus.classes.E_103_pinnavorm_p.name,
    elements: {
      etak: [
        generateKood(etakPunktobjektidDomains.d0103.name),

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
      etakPunktobjektidDomains.vajalikkus,
      etakPunktobjektidDomains.d0103,
      etakPunktobjektidDomains.pinnavormP_tyyp,
    ],

    headingData: generateHeadingData(
      "punkt",
      etak_kirjeldus.classes.E_103_pinnavorm_p.description.et
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_202_seisuveekogu_p.name,
    elements: {
      etak: [
        generateKood(etakPunktobjektidDomains.d0202.name),

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
      etakPunktobjektidDomains.vajalikkus,
      etakPunktobjektidDomains.d0103,
      etakPunktobjektidDomains.pinnavormP_tyyp,
    ],

    headingData: generateHeadingData(
      "punkt",
      etak_kirjeldus.classes.E_103_pinnavorm_p.description.et
    ),
  },

  {
    fcName: etak_kirjeldus.classes.E_301_muu_kolvik_p.name,
    elements: {
      etak: [
        generateKood(etakPunktobjektidDomains.d0101.name),
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
      etakPunktobjektidDomains.d0301,
      etakPunktobjektidDomains.kivi_tyyp,
      etakPunktobjektidDomains.vajalikkus,
    ],
    headingData: generateHeadingData(
      "punkt",
      etak_kirjeldus.classes.E_301_muu_kolvik_p.description.et
    ),
  },
];

export const etakJoonobjektid = [];

export const etakPindobjektidOverlap = [];

export const metadata = [
  {
    fcName: etak_kirjeldus.classes.alusdokument.name,
    elements: generateDataFields(),
    domainTables: [
      metadataDomains.alusdokument_tyyp,
      metadataDomains.tapsusklass_xy,
      metadataDomains.tapsusklass_z,
    ],
    headingData: generateHeadingData(
      "pind",
      etak_kirjeldus.classes.alusdokument.description.et,
      2
    ),
  },
];

export const derivedLayers = [
  {
    fcName: "vooluveed_kkr",
    elements: [],
  },
];
