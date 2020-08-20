import Layout from "../components/Layout";
import { NextPage } from "next";
import classNames from "@sindresorhus/class-names";

const BASE = "shadow-md rounded w-full h-32 mb-2";

const Sample: React.FC<{ className: string }> = props => {
  return (
    <div className="mb-16">
      <div className={classNames(BASE, props.className)} role="img"></div>
    </div>
  );
};

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <header className="text-center py-32 px-2">
      <h1 className="text-5xl font-black mb-4">🌈 <br />LGBTQ.css</h1>
      <p className="text-md font-mono uppercase tracking-widest">adding some pride to your stylesheets</p>
    </header>
    <section className="px-2 container mx-auto">
      <h2 className="text-3xl mb-4 font-sans font-black">Samples</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Sample className="Gay" />
        <Sample className="BiPlus" />
        <Sample className="Trans" />
        <Sample className="NonBinary" />
        <Sample className="Asexual" />
        <Sample className="Pansexual" />
        <Sample className="Queer" />
        <Sample className="GayMale" />
        <Sample className="Lesbian" />
        <Sample className="Intersex" />
        <Sample className="GenderFluid" />
        <Sample className="Agender" />
      </div>
    </section>
    <section className="px-2 container mx-auto mb-64">
      <h2 className="text-3xl mb-4 font-sans font-black">Usage</h2>
      <div className="md:grid grid-cols-6 gap-4"></div>
    </section>
  </Layout>
);

export default IndexPage;
