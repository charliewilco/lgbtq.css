import { useEffect } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import * as Fathom from "fathom-client";
import "lgbtq.css";

Router.events.on("routeChangeComplete", () => {
  Fathom.trackPageview();
});

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Fathom.load("OPKBSPUB", {
        includedDomains: ["lgbtq-css.vercel.app"]
      });
    }
  }, []);

  return <Component {...pageProps} />;
};

export default CustomApp;
