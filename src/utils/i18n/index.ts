import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//@ts-ignore
import Backend from "i18next-http-backend";


i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    // resources,
    returnObjects: true,
    fallbackLng: "et",
    lng: "et",
    supportedLngs: ['en', 'et'],
    // detection: {
    //   order: ['path', 'cookie', 'localStorage'],
    //   caches: ['cookie'],
    // },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
