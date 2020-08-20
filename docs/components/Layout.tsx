import React, { ReactNode } from "react";
import { FiGithub } from "react-icons/fi";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="font-serif bg-black text-white">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="flex justify-end p-2">
      <FiGithub size={24}/>
    </header>
    {children}
    <footer className="font-mono text-center px-2 py-4">
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
