export const SHORT_INTEGER = "lühike täisarv";
export const INTEGER = "täisarv";
export const DATE = "kuupäev";
export const REAL_NUMBER = "reaalarv"
export const GEOMETRY = "geomeetria"

export const POINT_GEOMETRY = "punkt"
export const LINE_GEOMETRY = "joon"
export const POLY_GEOMETRY = "pind"

export const CREATE_TEXT_TYPE = (length: number) => {
    return  `tekst(${length.toString()})`
}
