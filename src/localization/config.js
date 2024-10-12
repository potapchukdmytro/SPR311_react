import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import enTranslation from "./en/translation.json";
import ukTranslation from "./uk/translation.json";
import deTranslation from "./de/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        uk: { translation: ukTranslation },
        de: { translation: deTranslation }
    },
    lng: navigator.language,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});