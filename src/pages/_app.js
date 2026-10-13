import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import "@/styles/style.scss";
import "@/styles/titles.scss";
import "@/styles/fonts.scss";
import "@/styles/responsive.scss";
import "@/styles/animation.scss";
import "@/styles/arabic.scss";
import "@/styles/newHome.scss";
import "@/styles/newAboutUs.scss";
import "@/styles/newPortfolio.scss";
import "@/styles/newContactUs.scss";
import "@/styles/newShared.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import ClientOnly from "@/components/ClientOnly";
import "../../i18n";
import SEO from "@/components/SEO";

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

  return (
    <>
      {pageProps.meta && <SEO {...pageProps.meta} />}

      <ClientOnly>
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
          </motion.div>
        </AnimatePresence>
      </ClientOnly>
    </>
  );
}
