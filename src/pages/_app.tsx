import "@/styles/globals.css";
import type { AppProps } from "next/app";

import NavigationProvider from "../store/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <Component {...pageProps} />
    </NavigationProvider>
  );
}
