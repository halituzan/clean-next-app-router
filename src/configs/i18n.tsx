import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import trCommon from "../../public/locales/tr/common.json";
import enCommon from "../../public/locales/en/common.json";
import trFooter from "../../public/locales/tr/footer.json";
import enFooter from "../../public/locales/en/footer.json";

const resources = {
  tr: {
    common: trCommon,
    footer: trFooter,
  },
  en: {
    common: enCommon,
    footer: enFooter,
  },
};

const initLanguage = (lang: any) => {
  console.log("lang", lang);

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: lang ?? "tr",
    fallbackLng: lang ?? "tr",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
};

export default { initLanguage };
