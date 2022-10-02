import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../firebase/firabaseConfig";

function MyApp({ Component, pageProps }: AppProps) {
  const currentUser = useAuth();

  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
