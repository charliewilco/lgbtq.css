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
        includedDomains: ["lgbtq-css.vercel.app"],
      });
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        :root {
          --bg: #ece9f1;
          --fg: #151515;
          --monospace: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
            Liberation Mono, monospace;
          --sans-serif: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        * {
          margin: 0;
          padding: 0;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
          text-size-adjust: 100%;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
          background: var(--bg);
          color: var(--fg);
          font: 400 100% / 1.6 var(--sans-serif);
        }

        code {
          font-family: var(--monospace);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #151515;
            --fg: #ece9f1;
          }
        }
      `}</style>
    </>
  );
};

export default CustomApp;
