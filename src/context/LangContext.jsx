import { createContext, useContext, useMemo, useState, useCallback } from "react";
import { dict } from "../data/content";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("es");

  const toggleLang = useCallback(() => {
    setLang((l) => (l === "es" ? "en" : "es"));
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: dict[lang] }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
