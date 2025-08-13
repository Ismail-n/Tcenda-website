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
import i18n from "../../i18n";
import Script from "next/script";

const pageVariants = {
  initial: { opacity: 0, y: -100 },
  in: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
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

  useEffect(() => {
    const detectRegionAndSetLang = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const countryCode = data.country_code?.toLowerCase();

        // Arabic-speaking countries
        const arabicCountries = ["sa", "ae", "qa"]; // Saudi Arabia, UAE, Qatar

        const lang = arabicCountries.includes(countryCode) ? "ar" : "en";

        i18n.changeLanguage(lang).then(() => {
          document.documentElement.lang = lang;
          document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
          setLanguageReady(true);
        });
      } catch (error) {
        // Fallback to Arabic if fetch fails
        i18n.changeLanguage("ar").then(() => {
          document.documentElement.lang = "ar";
          document.documentElement.dir = "rtl";
          setLanguageReady(true);
        });
      }
    };

    detectRegionAndSetLang();
  }, []);

  if (!languageReady) return null; // Prevent initial render

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6X8KTEXW4Q" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6X8KTEXW4Q');
        `}
      </Script>
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
          <ClientOnly>
            <Component {...pageProps} />
            <WhatsAppPhoneButton />
          </ClientOnly>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
