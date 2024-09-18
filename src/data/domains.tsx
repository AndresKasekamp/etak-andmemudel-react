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
}