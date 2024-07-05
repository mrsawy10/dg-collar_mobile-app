import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n, { Module, ModuleType } from "i18next";

interface LanguageDetectorModule extends Module {
  type: ModuleType;
  async: boolean;
  init: () => void;
  detect: (callback: (lang: string) => any) => Promise<void>;
  cacheUserLanguage: (language: string) => Promise<void>;
}

const STORE_LANGUAGE_KEY = "@settings.lang";

const languageDetectorPlugin: LanguageDetectorModule = {
  type: "languageDetector",
  async: true,
  init: () => {
    return;
  },
  detect: async function (callback) {
    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(async (language) => {
        if (language) {
          return callback(language);
        } else {
          return callback(Localization.getLocales()[0].languageCode as string);
        }
      });
    } catch (error) {
      console.error("Error reading language", error);
    }
  },
  cacheUserLanguage: async function (language) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language.split("-")[0]);
    } catch (error) {
      console.log(error);
    }
  },
};

export default languageDetectorPlugin;
