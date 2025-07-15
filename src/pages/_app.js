import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "@/styles/globals.scss";
import "@/styles/style.scss";
import "@/styles/titles.scss";
import "@/styles/fonts.scss";
import "@/styles/responsive.scss";
import "@/styles/animation.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import ClientOnly from "@/components/ClientOnly";

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

  return (
    <>
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
          </ClientOnly>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
