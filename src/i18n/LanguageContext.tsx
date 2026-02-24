import { createContext, useContext, useState, ReactNode } from "react";
import { en } from "./translations/en";
import { zh } from "./translations/zh";
import { ja } from "./translations/ja";
import { es } from "./translations/es";

export type Language = "en" | "zh" | "ja" | "es";

export type Translations = typeof en;

const translationsMap: Record<Language, Translations> = { en, zh, ja, es };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = translationsMap[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
