import Head from "next/head";
import { useMemo } from "react";
import { GitHub, Twitter } from "./icons";

export const Social: React.VFC = () => {
  return (
    <div className="social">
      <a
        rel="noopener"
        target="_blank"
        href="https://github.com/charliewilco/lgbtq.css"
      >
        <GitHub width={24} height={24} />
      </a>
      <a
        rel="noopener"
        target="_blank"
        href="https://twitter.com/charlespeters"
      >
        <Twitter width={24} height={24} />
      </a>
      <style jsx>{`
        .social {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .social > a {
          display: block;
          color: #000;
          margin: 0 1rem;
        }

        @media (prefers-color-scheme: dark) {
          .social > a {
            color: #fff;
          }
        }
      `}</style>
    </div>
  );
};

export const EMOJI = "🏳️‍🌈";

function getEmojiLink(emoji: string): string {
  return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;
}

const Layout: React.FC<{ title: string }> = ({
  children,
  title = "This is the default title",
}) => {
  const link = getEmojiLink(EMOJI);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={link} />
      </Head>

      <main className="container">{children}</main>
      <footer className="container">
        <Social />
        <small>© {year} Charlie Peters, until further notice</small>
      </footer>
      <style jsx>
        {`
          .container {
            margin: 0 auto 2rem;
            max-width: 1280px;
            padding: 0 0.5rem;
          }

          footer {
            text-align: center;
            opacity: 0.75;
          }
        `}
      </style>
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
    </div>
  );
};

export default Layout;
