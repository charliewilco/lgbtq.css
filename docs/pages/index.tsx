import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <header className="text-center py-64 px-2">
      <h1 className="text-4xl font-black mb-2">🌈 LGBTQ.css</h1>
      <p className="text-md">adding some pride to your stylesheets</p>
    </header>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <section className="px-2 container">
      <h2>Samples</h2>

      <div className="md:grid"></div>
    </section>
  </Layout>
);

export default IndexPage;
