import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";


/*import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
*/
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "es",
    fallbackLng: "es",
    whitelist: ["en", "es"],
    interpolation: {
      escapeValue: false,
    },
    react: { 
      useSuspense: true //   <---- this will do the magic
    }
  });


export default i18n;