import React, { ReactNode } from "react";
import { FiGithub } from "react-icons/fi";
import Head from "next/head";
import classNames from "@sindresorhus/class-names";

type Props = {
  children?: ReactNode;
  title?: string;
};

function getEmojiLink(): string {
  const emoji = "🏳️‍🌈";
  return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;
}

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const link = getEmojiLink();

  const cx = "..." || classNames("bg-black", "text-white");

  return (
    <div className={cx}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={link} />
      </Head>
      <header className="flex justify-end p-2">
        <FiGithub size={24} />
      </header>
      {children}
      <footer className="px-2 py-4 font-mono text-center">
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
