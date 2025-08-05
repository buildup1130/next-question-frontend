import "@/styles/globals.css";
import { AuthProvider } from "@/utils/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import BottomNavigationLogic from "@/components/common/BottomNavigation/BottomNavigation.Container";
import Head from "next/head";

const hideBottomNavRoutes = ['/Question']

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const shouldShowBottomNav = !hideBottomNavRoutes.includes(router.pathname);
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"/>
    </Head>
    <AuthProvider>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          style={{
            minHeight: "100vh",
            width: "100%",
            maxWidth: "500px",
            overflowX: "hidden",
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {shouldShowBottomNav && <BottomNavigationLogic></BottomNavigationLogic>}
      <ToastContainer position="bottom-center" autoClose={2000} />
    </AuthProvider>
    </>
  );
}
