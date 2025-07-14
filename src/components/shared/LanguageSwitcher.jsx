import { useEffect, useState } from "react";
import i18n from "../../../i18n";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.language || "en");

  const changeLanguage = (lng) => {
    if (lng === lang) return;
    i18n.changeLanguage(lng); // ✅ change i18n language
    localStorage.setItem("lang", lng); // ✅ save to storage
    setLang(lng);
  };

  // Optional: load saved lang on first render
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
      setLang(storedLang);
    }
  }, []);

  return (
    <button
      className="language_btn"
      onClick={() => changeLanguage(lang === "en" ? "ar" : "en")}
    >
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}
