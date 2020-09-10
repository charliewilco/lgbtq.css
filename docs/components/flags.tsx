import { ContentArea, ContentTitle } from "./content";
import { Sample } from "./sample-flag";

export const Flags: React.FC = () => {
  return (
    <ContentArea className="col-span-12 mb-16">
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
  );
};
