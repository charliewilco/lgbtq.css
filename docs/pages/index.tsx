import Layout from "../components/Layout";
import { NextPage } from "next";
import classNames from "@sindresorhus/class-names";

const BASE = "shadow-md rounded w-full h-24 mb-2";

const Sample: React.FC<{ className: string; label?: string }> = props => {
  return (
    <div className="mb-16">
      <div className={classNames(BASE, props.className)} role="img"></div>
      {props.label ? (
        <h4 className="font-mono text-sm tracking-widest opacity-50 uppercase">
          {props.label}
        </h4>
      ) : null}
    </div>
  );
};

const ContentTitle: React.FC = props => {
  return (
    <h2 className="text-3xl mb-8 font-sans font-normal">{props.children}</h2>
  );
};

const ContentArea: React.FC<{ className?: string }> = props => {
  const cx = classNames("px-2 container mx-auto", props.className);
  return <section className={cx}>{props.children}</section>;
};

// POC Pride

const IndexPage: NextPage = () => (
  <Layout title="LGBTQ.css">
    <header className="container mx-auto py-32 px-2">
      <h1 className="text-5xl font-bold mb-4">
        🌈 <br />
        LGBTQ.css
      </h1>
      <p className="text-md font-mono uppercase tracking-widest opacity-50">
        adding some pride to your stylesheets
      </p>
    </header>
    <ContentArea>
      <ContentTitle>Flags</ContentTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
      </div>
    </ContentArea>
    <ContentArea className="mb-32">
      <article className="max-w-lg">
        <ContentTitle>About</ContentTitle>

        <p>
          FlagsSome simple CSS gradients to add some pride to your stylesheets.
          Color values are slightly saturated for preference.
        </p>
      </article>
    </ContentArea>
    <ContentArea className="mb-64">
      <ContentTitle>Usage</ContentTitle>
      <div className="md:grid grid-cols-6 gap-4"></div>
    </ContentArea>
  </Layout>
);

export default IndexPage;
