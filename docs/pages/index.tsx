import Layout, { EMOJI } from "../components/Layout";
import { NextPage } from "next";
import classNames from "@sindresorhus/class-names";

const BASE = "shadow-md rounded w-full h-24 mb-2";

const Sample: React.FC<{ className: string; label?: string }> = props => {
  return (
    <div className="">
      <div className={classNames(BASE, props.className)} role="img"></div>
      {props.label ? (
        <h4 className="font-mono text-xs font-bold tracking-widest opacity-50 uppercase">
          {props.label}
        </h4>
      ) : null}
    </div>
  );
};

const ContentTitle: React.FC = props => {
  return <h2 className="text-3xl mb-8 font-normal">{props.children}</h2>;
};

const ContentArea: React.FC<{ className?: string }> = props => {
  const cx = classNames("", props.className);
  return <section className={cx}>{props.children}</section>;
};

// POC Pride

const IndexPage: NextPage = () => (
  <Layout title="LGBTQ.css">
    <header className="col-span-12 lg:col-span-6 py-32">
      <h1 className="text-5xl font-bold mb-4">
        {EMOJI} <br />
        LGBTQ.css
      </h1>
      <p className="text-md font-mono uppercase tracking-widest opacity-50">
        adding some pride to your stylesheets
      </p>
    </header>
    <ContentArea className="py-32 col-span-12 lg:col-span-6 mb-32">
      <article>
        <ContentTitle>About</ContentTitle>

        <p>
          FlagsSome simple CSS gradients to add some pride to your stylesheets.
          Color values are slightly saturated for preference.
        </p>
      </article>
    </ContentArea>
    <ContentArea className="col-span-12">
      <ContentTitle>Flags</ContentTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <Sample className="Gay" label="Gay Pride" />
        <Sample className="BiPlus" label="Bisexual Pride" />
        <Sample className="Trans" label="Transgender Pride" />
        <Sample className="NonBinary" label="Non-binary Pride" />
        <Sample className="Asexual" label="Asexual Pride" />
        <Sample className="Pansexual" label="Pansexual Pride" />
        <Sample className="Queer" label="Queer Pride" />
        <Sample className="GayMale" label="Gay Male Pride" />
        <Sample className="Lesbian" label="Lesbian Pride" />
        <Sample className="Intersex" label="Intersex Pride" />
        <Sample className="GenderFluid" label="Genderfluid Pride" />
        <Sample className="Agender" label="Agender Pride" />
        <Sample className="Polyamorous" label="Polyamorous Pride" />
        <Sample className="Omnisexual" label="Omnisexual Pride" />
        <Sample className="Polysexual" label="Polysexual Pride" />
        <Sample className="AroAce" label="Aromantic Asexual Pride" />
        <Sample className="Genderqueer" label="Genderqueer Pride" />
      </div>
    </ContentArea>

    <ContentArea className="mb-64">
      <article>
        <ContentTitle>Usage</ContentTitle>
      </article>
    </ContentArea>
  </Layout>
);

export default IndexPage;
