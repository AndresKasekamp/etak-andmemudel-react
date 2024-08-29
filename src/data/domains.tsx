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
      createDataDomains(10, "lühike täisarv"),
      createDataDomains(20, "lühike täisarv"),
      createDataDomains(30, "Kivine ala"),
    ],
  },

  d0101: {
    name: "0101",
    desc: "Kivi",
    dataType: "lühike täisarv",
    elements: [createDataDomains(101, "Kivi")],
  },
};
