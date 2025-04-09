import "@/styles/globals.css";
import { AuthProvider } from "@/utils/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer position="bottom-center" autoClose={2000} />
    </AuthProvider>
  );
}
