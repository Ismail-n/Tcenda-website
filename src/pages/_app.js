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
import Script from "next/script";

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
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    const detectRegionAndSetLang = async () => {
      try {
        // Check saved language/country
        const savedLang = localStorage.getItem("user_lang");
        const savedCountry = localStorage.getItem("user_country");

        if (savedLang && savedCountry) {
          await i18n.changeLanguage(savedLang);
          document.documentElement.lang = savedLang;
          document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
          setIsIndia(savedCountry === "IN");
          setLanguageReady(true);
          return;
        }

        // Detect from IP
        const res = await fetch("https://ipwhois.app/json/");
        if (!res.ok) throw new Error(`Geo API failed with status ${res.status}`);
        const data = await res.json();

        const countryCode = data.country_code?.toUpperCase();
        const arabicCountries = ["SA", "AE", "QA"];
        const lang = arabicCountries.includes(countryCode) ? "ar" : "en";

        await i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        // Save for next time
        localStorage.setItem("user_lang", lang);
        localStorage.setItem("user_country", countryCode);

        setIsIndia(countryCode === "IN");
        setLanguageReady(true);
      } catch (error) {
        // Fallback to Arabic
        await i18n.changeLanguage("ar");
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        localStorage.setItem("user_lang", "ar");
        localStorage.setItem("user_country", "UNKNOWN");
        setIsIndia(false);
        setLanguageReady(true);
      }
    };

    detectRegionAndSetLang();
  }, []);

  if (!languageReady) return null;

  return (
    <>
      {/* GA Script - Only for non-India users */}
      {!isIndia && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-6X8KTEXW4Q"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6X8KTEXW4Q', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

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

        {/* Google Analytics Component - Only for non-India */}
        {!isIndia && <GoogleAnalytics gaId="G-6X8KTEXW4Q" />}
      </ClientOnly>
    </>
  );
}
