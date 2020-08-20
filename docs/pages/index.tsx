import Layout from "../components/Layout";
import { NextPage } from "next";
import classNames from "@sindresorhus/class-names";

const BASE = "shadow-md rounded w-full h-32 mb-2";

const Sample: React.FC<{ className: string, label?: string; }> = props => {
  return (
    <div className="mb-16">
      <div className={classNames(BASE, props.className)} role="img"></div>
      {props.label ? <h4 className="font-mono text-sm tracking-widest opacity-50 uppercase">{props.label}</h4> : null}
    </div>
  );
};

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <header className="text-center py-32 px-2">
      <h1 className="font-mono text-5xl font-bold mb-4">🌈 <br />LGBTQ.css</h1>
      <p className="text-md font-mono uppercase tracking-widest">adding some pride to your stylesheets</p>
    </header>
    <section className="px-2 container mx-auto">
      <h2 className="text-3xl mb-4 font-sans font-black">Flags</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Sample className="Gay" label="Gay Pride"/>
        <Sample className="BiPlus" label="Bisexual Pride"/>
        <Sample className="Trans" label="Transgender Pride"/>
        <Sample className="NonBinary" label="Non-binary Pride"/>
        <Sample className="Asexual" label="Asexual Pride"/>
        <Sample className="Pansexual" label="Pansexual Pride" />
        <Sample className="Queer" label="Queer Pride"/>
        <Sample className="GayMale" label="Gay Male Pride"/>
        <Sample className="Lesbian" label="Lesbian Pride"/>
        <Sample className="Intersex" label="Intersex Pride"/>
        <Sample className="GenderFluid" label="Genderfluid Pride"/>
        <Sample className="Agender" label="Agender Pride"/>
      </div>
    </section>
    <section className="px-2 container mx-auto mb-64">
      <h2 className="text-3xl mb-4 font-sans font-black">Usage</h2>
      <div className="md:grid grid-cols-6 gap-4"></div>
    </section>
  </Layout>
);

export default IndexPage;
