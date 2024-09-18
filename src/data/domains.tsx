import etak_kirjeldus from "./etak_kirjeldus.json" assert { type: "json" };


function createDataDomains(kood: number, nimetus: string) {
  return { kood, nimetus };
}

export const etakPunktobjektidDomains = {
  vajalikkus: {
    name: "vajalikkus",
    desc: "Objekt vajab tähelepanu",
    dataType: "lühike täisarv",
    elements: [
      createDataDomains(10, "Vajalik välikontroll"),
      createDataDomains(20, "Ruumikuju vajab täpsustamist"),
      createDataDomains(30, "Korras"),
      createDataDomains(40, "Tärkandmed vajavad täpsustamist"),
      createDataDomains(50, "Ootab täiendavat alusdokumenti"),
    ],
  },

  kivi_tyyp: {
    name: "kivi_tyyp",
    desc: "Kivi tüüp",
    dataType: "lühike täisarv",
    elements: [
      createDataDomains(10, "Üksik kivi"),
      createDataDomains(20, "Kivihunnik"),
      createDataDomains(30, "Kivine ala"),
    ],
  },

  pinnavormP_tyyp: {
    name: "pinnavormP_tyyp",
    desc: "Pinnavormi tüüp punktina",
    dataType: "lühike täisarv",
    elements: [
      createDataDomains(10, "Auk"),
      createDataDomains(20, "Tehisküngas"),
      createDataDomains(50, "Koobas"),
      createDataDomains(60, "Ebatasane ala"),
      createDataDomains(70, "Kärestik"),
    ],
  },

  d0101: {
    name: "0101",
    desc: "Kivi",
    dataType: "lühike täisarv",
    elements: [createDataDomains(101, "Kivi")],
  },

  d0103: {
    name: "0103",
    desc: "Pinnvorm",
    dataType: "lühike täisarv",
    elements: [createDataDomains(103, "Pinnavorm")],
  },
};


export const metadataDomains = {

  alusdokument_tyyp: {
    name: "alusdokument_tyyp",
    desc: etak_kirjeldus.classes.alusdokument.fields.tyyp.description.et,
    dataType: "lühike täisarv",
    elements: [
      createDataDomains(10, "Maa-ameti aerofoto"),
      createDataDomains(20, "Ruumiandmekogum"),
      createDataDomains(30, "Tärkandmekogum"),
      createDataDomains(40, "Kaardistus"),
      createDataDomains(60, "Kõrgusmudel"),
      createDataDomains(999, "Muu"),
    ],
  },

  tapsusklass_xy: {
    name: "tapsusklass_xy",
    desc: etak_kirjeldus.classes.alusdokument.fields.tapsus.description.et,
    dataType: "lühike täisarv",
    elements: [
      createDataDomains(0, "Teadmata"),
      createDataDomains(10, "10 m"),
      createDataDomains(20, "4 m"),
      createDataDomains(30, "2 m"),
      createDataDomains(40, "1 m"),
      createDataDomains(50, "0.75 m"),
      createDataDomains(60, "0.5 m"),
      createDataDomains(70, "0.35 m"),
      createDataDomains(75, "0.25 m"),
      createDataDomains(8, "25 m"),
      createDataDomains(80, "0.1 m"),
      createDataDomains(800, "Eesti põhikaart"),
      createDataDomains(997, "Täitmata"),
      createDataDomains(998, "Ei ole rakendatav"),
      createDataDomains(999, "Muu"),
    ],
  },

  tapsusklass_z: {
    name: "tapsusklass_z",
    desc: etak_kirjeldus.classes.alusdokument.fields.korgustapsus.description.et,
    dataType: "lühike täisarv",
    elements: [
      createDataDomains(0, "Teadmata"),
      createDataDomains(10, "0.1 m"),
      createDataDomains(20, "0.5 m"),
      createDataDomains(30, "1 m"),
      createDataDomains(40, "2.5 m"),
      createDataDomains(50, "5 m"),
      createDataDomains(60, "10 m"),
      createDataDomains(997, "Täitmata"),
      createDataDomains(998, "Ei ole rakendatav"),
      createDataDomains(999, "Muu"),
    ],
  },
}