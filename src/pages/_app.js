// pages/_app.js

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "@/styles/globals.scss";
import "@/styles/style.scss";
import "@/styles/titles.scss";
import "@/styles/fonts.scss";
import "@/styles/responsive.scss";
import "@/styles/animation.scss";
import "@/styles/arabic.scss";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import ClientOnly from "@/components/ClientOnly";
import WhatsAppPhoneButton from "@/components/shared/WhatsAppPhoneButton";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import i18n from "../../i18n";

const pageVariants = {
  initial: { opacity: 0, y: -100 },
  in: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } },
  out: { opacity: 0, y: 100 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4,
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [languageReady, setLanguageReady] = useState(false);
  const [isIndia, setIsIndia] = useState(null); // null = still checking

  useEffect(() => {
    const detectRegionAndSetLang = async () => {
      try {
        // 1️⃣ Check saved language
        const savedLang = localStorage.getItem("user_lang");
        if (savedLang) {
          await i18n.changeLanguage(savedLang);
          document.documentElement.lang = savedLang;
          document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
          setLanguageReady(true);
        } else {
          // 2️⃣ Detect via IP
          const res = await fetch("https://ipwhois.app/json/");
          if (!res.ok) throw new Error("Geo API failed");
          const data = await res.json();

          const countryCode = data.country_code?.toUpperCase();
          setIsIndia(countryCode === "IN");

          const arabicCountries = ["SA", "AE", "QA"];
          const lang = arabicCountries.includes(countryCode) ? "ar" : "en";
          await i18n.changeLanguage(lang);
          document.documentElement.lang = lang;
          document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
          localStorage.setItem("user_lang", lang);
          setLanguageReady(true);
        }
      } catch (err) {
        console.error("Geo detection failed", err);
        // Default: not India (track) + Arabic fallback
        setIsIndia(false);
        await i18n.changeLanguage("ar");
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        localStorage.setItem("user_lang", "ar");
        setLanguageReady(true);
      }
    };

    detectRegionAndSetLang();
  }, []);

  // Wait until language + country detection is done
  if (!languageReady || isIndia === null) return null;

  return (
    <>
      {/* Load GA only if NOT from India */}
      {!isIndia && <GoogleAnalytics gaId="G-8WK0QKTTG9" />}

      <ClientOnly>
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.asPath}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Component {...pageProps} />
            <WhatsAppPhoneButton />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </ClientOnly>
    </>
  );
}
