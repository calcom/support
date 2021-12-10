import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IntercomProvider } from "react-use-intercom";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntercomProvider appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID!}>
      <Component {...pageProps} />
    </IntercomProvider>
  );
}

export default MyApp;
