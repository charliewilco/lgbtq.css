import Layout, { EMOJI } from "../components/Layout";
import { NextPage } from "next";
import { Flags } from "../components/flags";
import { Usage, UsageTable } from "../components/usage";
import { About } from "../components/about";

// POC Pride

const IndexPage: NextPage = () => (
  <Layout title="LGBTQ.css">
    <header className="py-32 col-span-12 lg:col-span-6">
      <h1 className="mb-4 text-5xl font-bold">
        {EMOJI} <br />
        LGBTQ.css
      </h1>
      <p className="font-mono tracking-widest uppercase opacity-50 text-md">
        adding some pride to your stylesheets
      </p>
    </header>
    <About />
    <Flags />
    <Usage />
    <UsageTable />
  </Layout>
);

export default IndexPage;
