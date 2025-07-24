import { useState } from "react";
import i18n from "../../../i18n";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.language || "ar");

  const changeLanguage = (lng) => {
    if (lng === lang) return;
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLang(lng);

    // Apply new direction immediately
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      className={`language_btn ${lang === "en" ? "jf_font" : "adam_font"}`}
      onClick={() => changeLanguage(lang === "en" ? "ar" : "en")}
    >
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}
