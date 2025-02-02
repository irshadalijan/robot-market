import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../context/Provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
