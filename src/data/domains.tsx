import { SHORT_INTEGER } from "./dataTypes";
import etak_kirjeldus from "./etak_kirjeldus.json" assert { type: "json" };

const createDataDomains = (kood: number, nimetus: string) => {
  return { kood, nimetus };
};

// Function to create a domain object
const createDomain = (desc: string, code: number) => {
  const name = "0".concat(code.toString());
  return {
    name,
    desc,
    dataType: SHORT_INTEGER,
    elements: [createDataDomains(code, desc)],
  };
};

export const etakPunktobjektidDomains = {
  kivi_tyyp: {
    name: "kivi_tyyp",
    desc: "Kivi tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Üksik kivi"),
      createDataDomains(20, "Kivihunnik"),
      createDataDomains(30, "Kivine ala"),
    ],
  },

  pinnavormP_tyyp: {
    name: "pinnavormP_tyyp",
    desc: "Pinnavormi tüüp punktina",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Auk"),
      createDataDomains(20, "Tehisküngas"),
      createDataDomains(50, "Koobas"),
      createDataDomains(60, "Ebatasane ala"),
      createDataDomains(70, "Kärestik"),
    ],
  },

  seisuveekoguP_tyyp: {
    name: "seisuveekoguP_tyyp",
    desc: "Seisuveekogu tüüp punktina",
    dataType: SHORT_INTEGER,
    elements: [createDataDomains(80, "Allikas")],
  },

  muu_kolvikP_tyyp: {
    name: "muu_kolvikP_tyyp",
    desc: "Muu kõlviku tüüp punktina",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(70, "Üksikhaud"),
      createDataDomains(80, "Mälestusmärk"),
    ],
  },

  puittaimestikP_tyyp: {
    name: "puittaimestikP_tyyp",
    desc: "Puittaimestiku tüüp punktina",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(50, "Puittaim"),
      createDataDomains(60, "Harvik"),
      createDataDomains(70, "Salu"),
    ],
  },

  korgrajatis_tyyp: {
    name: "korgrajatis_tyyp",
    desc: "Kõrgrajatise tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Korsten"),
      createDataDomains(20, "Sidemast"),
      createDataDomains(30, "Torn"),
      createDataDomains(40, "Valgusmast"),
    ],
  },

  korgrajatis_seos: {
    name: "korgrajatis_seos",
    desc: "Kõrgrajatise seos hoonega",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Kõrgrajatisel puudub seos hoonega"),
      createDataDomains(20, "Kõrgrajatis asub hoone peal"),
      createDataDomains(30, "Kõrgrajatis ja hoone on sama objekt"),
      createDataDomains(997, "Täitmata"),
    ],
  },

  muu_rajatisP_tyyp: {
    name: "muu_rajatisP_tyyp",
    desc: "Muu rajatise tüüp punktina",
    dataType: SHORT_INTEGER,
    elements: [createDataDomains(999, "Muu")],
  },

  tehnopaigaldis_tyyp: {
    name: "tehnopaigaldis_tyyp",
    desc: "Tehnopaigaldise tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Trafo"),
      createDataDomains(20, "Elektrituulik"),
      createDataDomains(30, "Mahuti"),
    ],
  },
};

export const etakJoonobjektidDomains = {
  hudrotehniline_rajatis_tyyp: {
    name: "hudrotehniline_rajatis_tyyp",
    desc: "Hüdrotehnilise rajatise tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(30, "Pais"),
      createDataDomains(40, "Paadisild"),
      createDataDomains(50, "Muul"),
    ],
  },

  kaldajoon_tyyp: {
    name: "kaldajoon_tyyp",
    desc: "Kaldajoone tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Selge"),
      createDataDomains(20, "Ebamäärane"),
      createDataDomains(30, "Kindlustatud"),
      createDataDomains(40, "Mõtteline"),
    ],
  },

  kaldajoon_veekogu_tyyp: {
    name: "kaldajoon_veekogu_tyyp",
    desc: "Kaldajoonega piirneva veekogu tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Merekallas"),
      createDataDomains(30, "Seisuveekogu kallas"),
      createDataDomains(40, "Vooluveekogu kallas"),
      createDataDomains(50, "Mere ja seisuveekogu vaheline kallas"),
      createDataDomains(60, "Mere ja vooluveekogu vaheline kallas"),
      createDataDomains(70, "Seisu- ja vooluveekogu vaheline kallas"),
      createDataDomains(80, "Saartevaheline kallas"),
    ],
  },

  liikluskorralduslik_rajatis_suletus: {
    name: "liikluskorralduslik_rajatis_suletus",
    desc: "Sõidutakistuse iseloom",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Püsivalt suletud"),
      createDataDomains(20, "Avatav"),
      createDataDomains(997, "Täitmata"),
      createDataDomains(998, "Ei ole rakendatav"),
    ],
  },

  liikluskorralduslik_rajatisJ_tyyp: {
    name: "liikluskorralduslik_rajatisJ_tyyp",
    desc: "Liikluskorraldusliku rajatise tüüp joonena",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Ülevedu"),
      createDataDomains(20, "Sõidutakistus"),
      createDataDomains(40, "Purre"),
      createDataDomains(50, "Tunnel"),
    ],
  },

  nolv_tyyp: {
    name: "nolv_tyyp",
    desc: "Nõlva tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Nõlv"),
      createDataDomains(20, "Looduslik järsak"),
      createDataDomains(30, "Tehisjärsak"),
    ],
  },

  piire_tyyp: {
    name: "piire_tyyp",
    desc: "Piirde tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Piirdeaed"),
      createDataDomains(20, "Kiviaed"),
      createDataDomains(30, "Müür"),
      createDataDomains(40, "Tehissein"),
    ],
  },

  pinnavormJ_tyyp: {
    name: "pinnavormJ_tyyp",
    desc: "Pinnavormi tüüp joonena",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(30, "Kaitsekraav"),
      createDataDomains(40, "Vall"),
      createDataDomains(80, "Juga"),
    ],
  },

  puittaimestikJ_tyyp: {
    name: "puittaimestikJ_tyyp",
    desc: "Pinnavormi tüüp joonena",
    dataType: SHORT_INTEGER,
    elements: [createDataDomains(80, "Puittaimede rida")],
  },

  roobastee_tahtsus: {
    name: "roobastee_tahtsus",
    desc: "Rööbastee tähtsus",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Põhitee"),
      createDataDomains(20, "Kõrvaltee"),
      createDataDomains(30, "Harutee"),
      createDataDomains(997, "Täitmata"),
      createDataDomains(998, "Ei ole rakendatav"),
    ],
  },

  roobastee_tyyp: {
    name: "roobastee_tyyp",
    desc: "Rööbastee tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Laiarööpmeline"),
      createDataDomains(20, "Kitsarööpmeline"),
      createDataDomains(25, "Normaalrööpmeline"),
      createDataDomains(30, "Köistee"),
      createDataDomains(40, "Trammitee"),
      createDataDomains(50, "Muu"),
    ],
  },

  tee_liiklus: {
    name: "tee_liiklus",
    desc: "Teel lubatud liikumissuund",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Kahesuunaline"),
      createDataDomains(20, "Pärisuunaline"),
      createDataDomains(30, "Vastassuunaline"),
      createDataDomains(997, "Täitmata"),
    ],
  },
  // TODO mõned sõidutee asjad on puudu
  tee_soidutee: {
    name: "tee_soidutee",
    desc: "Sõidutee kood",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(1, "Parempoolne või ainuke"),
      createDataDomains(2, "Vasakpoolne"),
      createDataDomains(997, "Täitmata"),
    ],
  },

  truup_tyyp: {
    name: "truup_tyyp",
    desc: "Truubi tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Ühendatud"),
      createDataDomains(20, "Kuiv"),
    ],
  },

  vooluveekogu_laius: {
    name: "vooluveekogu_laius",
    desc: "Vooluveekogu laiusklass",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Põhitelg"),
      createDataDomains(20, "Sekundaarne telg"),
    ],
  },

  vooluveekogu_telje_tyyp: {
    name: "vooluveekogu_telje_tyyp",
    desc: "Vooluveekogu telje iseloom",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Maa-pealne telg"),
      createDataDomains(20, "Maa-alune telg"),
      createDataDomains(30, "Mõtteline telg"),
    ],
  },

  vooluveekogu_tyyp: {
    name: "vooluveekogu_tyyp",
    desc: "Vooluveekogu tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Jõgi"),
      createDataDomains(20, "Kanal"),
      createDataDomains(30, "Oja"),
      createDataDomains(40, "Peakraav"),
      createDataDomains(50, "Kraav"),
    ],
  },
};

export const etakPindobjektidOverlapDomains = {
  muu_kolvikKA_tyyp: {
    name: "muu_kolvikKA_tyyp",
    desc: "Muu kõlviku tüüp kattuva alana",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(30, "Kalmistu"),
      createDataDomains(40, "Lennuväli"),
      createDataDomains(50, "Sadam"),
      createDataDomains(60, "Spordikompleks"),
      createDataDomains(90, "Prügila"),
      createDataDomains(100, "Karjäär"),
    ],
  },

  margalaKA_tyyp: {
    name: "margalaKA_tyyp",
    desc: "Märgala tüüp kattuva alana",
    dataType: SHORT_INTEGER,
    elements: [createDataDomains(50, "Roostik")],
  },

  hoone_tyyp: {
    name: "hoone_tyyp",
    desc: "Hoone tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Elu- või ühiskondlik hoone"),
      createDataDomains(20, "Kõrval- või tootmishoone"),
      createDataDomains(30, "Vundament"),
      createDataDomains(40, "Vare"),
      createDataDomains(50, "Ehitatav hoone"),
    ],
  },

  muu_rajatisKA_tyyp: {
    name: "muu_rajatisKA_tyyp",
    desc: "Muu rajatise tüüp kattuva alana",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Kasvuhoone"),
      createDataDomains(20, "Katusealune"),
      createDataDomains(999, "Muu"),
    ],
  },

  maaalune_hoone_tyyp: {
    name: "maaalune_hoone_tyyp",
    desc: "Maa-aluse hoone tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Kelder"),
      createDataDomains(20, "Garaaž"),
      createDataDomains(999, "Muu"),
    ],
  },

  liikluskorralduslik_rajatisKA_tyyp: {
    name: "liikluskorralduslik_rajatisKA_tyyp",
    desc: "Liikluskorraldusliku rajatise tüüp kattuva alana",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(30, "Sild"),
      createDataDomains(60, "Autotunnel"),
    ],
  },
};

export const etakPindobjektidMainDomains = {
  seisuveekogu_tyyp: {
    name: "seisuveekogu_tyyp",
    desc: "Seisuveekogu tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Järv"),
      createDataDomains(20, "Paisjärv"),
      createDataDomains(30, "Tehisjärv"),
      createDataDomains(40, "Laugas"),
      createDataDomains(50, "Biotiik"),
      createDataDomains(60, "Tiik"),
      createDataDomains(90, "Paadikanal"),
      createDataDomains(997, "Täitmata"),
      createDataDomains(999, "Muu"),
    ],
  },

  seisuveekogu_kpo: {
    name: "seisuveekogu_kpo",
    desc: "Seisuveekogu roll KPO ISs",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Keskkonnaregistri seisuveekogu"),
      createDataDomains(
        20,
        "Seisuveekogu, mida läbib Keskkonnaregistri vooluveekogu"
      ),
      createDataDomains(
        30,
        "Seisuveekogu, mis ei ole seotud Keskkonnaregistriga"
      ),
    ],
  },

  muu_kolvikA_tyyp: {
    name: "muu_kolvikA_tyyp",
    desc: "Muu kõlviku tüüp alana",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Haljasala"),
      createDataDomains(20, "Jäätmaa"),
    ],
  },

  ou_tyyp: {
    name: "ou_tyyp",
    desc: "Õue tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Eraõu"),
      createDataDomains(20, "Tootmisõu"),
    ],
  },

  ou_kasutus: {
    name: "ou_kasutus",
    desc: "Tootmisõue erijuht",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Alajaam"),
      createDataDomains(20, "Tsisternladu"),
      createDataDomains(30, "Ilmajaam"),
      createDataDomains(40, "Antennirajatis"),
      createDataDomains(50, "Päikesepark"),
      createDataDomains(997, "Täitmata"),
      createDataDomains(998, "Ei ole rakendatav"),
      createDataDomains(999, "Muu"),
    ],
  },

  haritav_maa_tyyp: {
    name: "haritav_maa_tyyp",
    desc: "Haritava maa tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Põld"),
      createDataDomains(20, "Aianduslik maa"),
    ],
  },

  lage_tyyp: {
    name: "lage_tyyp",
    desc: "Lageda tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Rohumaa"),
      createDataDomains(20, "Liivane ala"),
      createDataDomains(30, "Muu lage"),
      createDataDomains(40, "Klibune ala"),
    ],
  },

  puittaimestikA_tyyp: {
    name: "puittaimestikA_tyyp",
    desc: "Puittaimestiku tüüp alana",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Mets"),
      createDataDomains(30, "Põõsastik"),
    ],
  },

  margalaA_tyyp: {
    name: "margalaA_tyyp",
    desc: "Märgala tüüp alana",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Madalsoo"),
      createDataDomains(20, "Raba"),
      createDataDomains(30, "Õõtsik"),
      createDataDomains(40, "Soovik"),
    ],
  },

  turbavali_tyyp: {
    name: "turbavali_tyyp",
    desc: "Turbavälja tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Turbaväli"),
      createDataDomains(20, "Mahajäetud turbaväli"),
    ],
  },

  teeA_tyyp: {
    name: "teeA_tyyp",
    desc: "Teeala tüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Liiklusala"),
      createDataDomains(20, "Parkla"),
      createDataDomains(30, "Bussijaam"),
      createDataDomains(40, "Lennurada"),
      createDataDomains(50, "Sport"),
      createDataDomains(60, "Jalakäijate ala"),
      createDataDomains(997, "Täitmata"),
      createDataDomains(999, "Muu"),
    ],
  },
};

export const sharedDomains = {
  vajalikkus: {
    name: "vajalikkus",
    desc: "Objekt vajab tähelepanu",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Vajalik välikontroll"),
      createDataDomains(20, "Ruumikuju vajab täpsustamist"),
      createDataDomains(30, "Korras"),
      createDataDomains(40, "Tärkandmed vajavad täpsustamist"),
      createDataDomains(50, "Ootab täiendavat alusdokumenti"),
    ],
  },

  toevaartus: {
    name: "toevaartus",
    desc: "Tõeväärtustüüp",
    dataType: SHORT_INTEGER,
    elements: [
      createDataDomains(10, "Jah"),
      createDataDomains(20, "Ei"),
      createDataDomains(997, "Täitmata"),
      createDataDomains(998, "Ei ole rakendatav"),
    ],
  },

  d0101: createDomain("Kivi", 101),
  d0102: createDomain("Nõlv", 102),
  d0103: createDomain("Pinnavorm", 103),

  d0201: createDomain("Meri", 201),
  d0202: createDomain("Seisuveekogu", 202),
  d0203: createDomain("Vooluveekogu", 203),
  d0204: createDomain("Kaldajoon", 204),
  d0205: createDomain("Hüdrotehniline rajatis", 205),
  d0206: createDomain("Truup", 206),

  d0301: createDomain("Muu kõlvik", 301),
  d0302: createDomain("Õu", 302),
  d0303: createDomain("Haritav maa", 303),
  d0304: createDomain("Lage", 304),
  d0305: createDomain("Puittaimestik", 305),
  d0306: createDomain("Märgala", 306),
  d0307: createDomain("Turbaväli", 307),

  d0401: createDomain("Hoone", 401),
  d0402: createDomain("Kõrgrajatis", 402),
  d0403: createDomain("Muu rajatis", 403),
  d0404: createDomain("Maa-alune hoone", 404),
  d0405: createDomain("Piire", 405),

  d0501: createDomain("Tee", 501),
  d0502: createDomain("Rööbastee", 502),
  d0503: createDomain("Siht", 503),
  d0505: createDomain("Liikluskorralduslik rajatis", 505),

  d0601: createDomain("Elektriliin", 601),
  d0602: createDomain("Tehnopaigaldis", 602),
  d0603: createDomain("Torujuhe", 603),
};

export const metadataDomains = {
  alusdokument_tyyp: {
    name: "alusdokument_tyyp",
    desc: etak_kirjeldus.classes.alusdokument.fields.tyyp.description.et,
    dataType: SHORT_INTEGER,
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
    dataType: SHORT_INTEGER,
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
    desc: etak_kirjeldus.classes.alusdokument.fields.korgustapsus.description
      .et,
    dataType: SHORT_INTEGER,
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
};
