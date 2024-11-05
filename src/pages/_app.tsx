import "@/styles/globals.css"; // Adapte o caminho conforme a sua estrutura
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
