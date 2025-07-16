import { useEffect, useState } from "react";
import i18n from "../../../i18n";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.language || "en");

  const changeLanguage = (lng) => {
    if (lng === lang) return;
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLang(lng);

    // ✅ Set dir attribute on <html>
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const initialLang = storedLang || i18n.language || "en";
    i18n.changeLanguage(initialLang);
    setLang(initialLang);

    // ✅ Set dir/lang on first render
    document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = initialLang;
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
