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
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import i18n from "../../i18n";
import Script from "next/script";
import SEO from "@/components/SEO";
import { metaData } from "@/data/metaInformationData";
import { useTranslation } from "react-i18next";

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
  const [currentLang, setCurrentLang] = useState("en");
  const { t } = useTranslation("meta"); // load meta namespace

  // Meta information
  const { asPath } = router;
  useEffect(() => {
    const detectRegionAndSetLang = async () => {
      try {
        // 1️⃣ Check if user already has a saved language
        const savedLang = localStorage.getItem("user_lang");
        if (savedLang) {
          await i18n.changeLanguage(savedLang);
          document.documentElement.lang = savedLang;
          document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
          setLanguageReady(true);
          return;
        }

        // 2️⃣ Detect from IP
        const res = await fetch("https://ipwhois.app/json/"); // CORS-friendly API
        if (!res.ok) throw new Error(`Geo API failed with status ${res.status}`);
        const data = await res.json();

        const countryCode = data.country_code?.toLowerCase();
        const arabicCountries = ["sa", "ae", "qa"];
        const lang = arabicCountries.includes(countryCode) ? "ar" : "en";

        await i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        localStorage.setItem("user_lang", lang); // Save for future visits
        setLanguageReady(true);
      } catch (error) {
        // Fallback to Arabic
        await i18n.changeLanguage("ar");
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        localStorage.setItem("user_lang", "ar");
        setLanguageReady(true);
      }
    };

    detectRegionAndSetLang();
  }, []);

  const meta = metaData.find(m => m.path === router.asPath)?.details || {};
  console.log("router.asPath is ",router.asPath);



  if (!languageReady) return null;

  return (
    <>
      {/* GA Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8WK0QKTTG9"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          fetch("https://ipwhois.app/json/")
            .then(res => res.json())
            .then(data => {
              if (data.country_code !== "IN") {
                gtag('config', 'G-8WK0QKTTG9', {
                  page_path: window.location.pathname,
                });
              } else {
                console.log("IP blocked from India");
              }
            })
            .catch(err => {
              console.error("Geo lookup failed, sending analytics by default", err);
            });
        `}
      </Script>

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
            <SEO
              title={meta.title || "Tod"}
              keywords={meta.keywords || ""}
              description={meta.description || ""}
            />
            <Component {...pageProps} />
            <WhatsAppPhoneButton />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </ClientOnly>
    </>
  );
}
