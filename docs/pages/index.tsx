import Layout, { EMOJI } from "../components/Layout";
import { NextPage } from "next";
import { Flags } from "../components/flags";
import { UsageTable } from "../components/usage";

// POC Pride

const IndexPage: NextPage = () => (
  <Layout title="LGBTQ.css">
    <article>
      <header className="full">
        <span role="img" aria-label="Rainbow Emoji">
          {EMOJI}
        </span>
        <h1 className="title">LGBTQ.css</h1>
        <p>adding some pride to your stylesheets</p>
      </header>
      <section className="full">
        <h2>Flags</h2>
        <Flags />
      </section>
      <section>
        <h2>About</h2>
        <p>
          I love Pride and I like CSS and eventually I figured out you could
          draw pride flags with CSS gradients using a little bit of math I drew
          a lot. Being able to show my pride on my projects with just a little
          CSS is just ✨.
        </p>
        <p></p>

        <p>If you'd like to add one feel free to open a PR on GitHub.</p>
      </section>
      <section>
        <h2>Usage</h2>
        <p>Install it from npm</p>
        <pre>
          <code>yarn add lgbtq.css</code>
        </pre>
        <p>Add it in your CSS:</p>
        <pre>
          <code>@import "~lgbtq.css";</code>
        </pre>
        <p>
          Then use the class that represents the pride flag you want to use.
          Applying the class to an element will change it's background.
        </p>
      </section>
      <section className="full">
        <h2>Class Names</h2>
        <UsageTable />
      </section>
    </article>

    <style jsx>{`
      h1 {
        font-family: var(--sans-serif);
        margin: 0 auto 1rem;
        font-weight: 900;
        font-size: 3.75rem;
        text-align: center;
        max-width: fit-content;
        display: block;
      }

      h2 {
        font-size: 1.5rem;
        letter-spacing: -0.05em;
        margin-bottom: 1rem;
        font-weight: 700;
      }

      header {
        text-align: center;
      }

      header p {
        max-width: unset !important;
      }

      p {
        max-width: 65ch;
        opacity: 0.75;
        margin-bottom: 1rem;
      }

      pre {
        margin-bottom: 1rem;
        background: #000;
        color: #fff;
        padding: 0.5rem;
        border-radius: 0.25rem;
      }

      [aria-label="Rainbow Emoji"] {
        font-size: 2rem;
        background: var(--fg);
        width: 3rem;
        height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem auto 0;
        border-radius: 50%;
      }

      article {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(12, minmax(0, 1fr));
      }

      .full {
        margin-bottom: 2rem;
      }

      section,
      .full {
        grid-column: span 12 / span 12;
      }

      .title {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-position: center;
        background-size: contain;
        background-image: linear-gradient(
          to right,
          hsl(8, 62%, 51%),
          hsl(24, 86%, 48%),
          hsl(44, 100%, 50%),
          hsl(163, 100%, 35%),
          hsl(199, 79%, 37%),
          hsl(254, 26%, 47%)
        );
      }

      @media (min-width: 768px) {
        section {
          grid-column: span 6 / span 6;
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
