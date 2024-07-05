import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
import * as Localization from "expo-localization";

import languageDetectorPlugin from "./langDetector";
import ar from "@/locals/ar.json";
import en from "@/locals/en.json";

// import { getLocales } from "react-native-localize";

// console.log({ getLocales: getLocales() });
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
I18nManager.allowRTL(Localization.locale in resources);

i18n.on("languageChanged", async (lng) => {
  const lngDir = i18n.dir(lng);
  lngDir === "ltr" ? I18nManager.forceRTL(false) : I18nManager.forceRTL(true);
});
i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    // lng: getLocales()[0].languageCode,
    fallbackLng: "en",
    compatibilityJSON: "v3",
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
