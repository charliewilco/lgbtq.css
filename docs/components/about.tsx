import { ContentArea, ContentTitle } from "./content";

export const About: React.FC = () => (
  <ContentArea className="py-32 mb-8 lg:mb-32 col-span-12 lg:col-span-6">
    <article>
      <ContentTitle>About</ContentTitle>
      <p className="mb-4">
        I love pride and I like CSS and eventually I figured out you could draw
        pride flags with CSS gradients using a little bit of math I drew a lot.
        Being able to show my pride on my projects with just a little CSS is
        just 😍.
      </p>

      <p>If you'd like to add one feel free to open a PR on GitHub.</p>
    </article>
  </ContentArea>
);
