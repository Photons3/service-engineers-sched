import "@/styles/globals.css";
import type { AppProps } from "next/app";

import NavigationProvider from "../store/Navigation";
import SelectedDateProvider from "../store/SelectedDates";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <SelectedDateProvider>
        <Component {...pageProps} />
      </SelectedDateProvider>
    </NavigationProvider>
  );
}
