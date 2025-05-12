import "@/styles/globals.css";
import { AuthProvider } from "@/utils/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
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
      <ToastContainer position="bottom-center" autoClose={2000} />
    </AuthProvider>
  );
}
