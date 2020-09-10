import React, { ReactNode } from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import Head from "next/head";
import classNames from "@sindresorhus/class-names";

type Props = {
  children?: ReactNode;
  title?: string;
};

export const EMOJI = "🏳️‍🌈";

function getEmojiLink(emoji: string): string {
  return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;
}

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const link = getEmojiLink(EMOJI);
  const cx = classNames("font-mono dark:bg-gray-800", "dark:text-white");
  const year = new Date().getFullYear();

  return (
    <div className={cx}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={link} />
      </Head>
      <header className="container mx-auto flex justify-end py-4 px-2">
        <a
          rel="noopener"
          target="_blank"
          className="block mr-4"
          href="https://github.com/charliewilco"
        >
          <FiGithub size={24} />
        </a>
        <a
          rel="noopener"
          target="_blank"
          className="block"
          href="https://twitter.com/charlespeters"
        >
          <FiTwitter size={24} />
        </a>
      </header>
      <main className="container mx-auto px-2 grid grid-cols-12 gap-8">
        {children}
      </main>
      <footer className="container mx-auto flex items-center justify-between py-8 px-2">
        <div className="text-base">
          <span>© {year} Charlie Peters, until further notice</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
