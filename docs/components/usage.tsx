import { ContentArea, ContentTitle } from "./content";

const TableData: React.FC<{ className: string; label?: string }> = props => {
  return (
    <tr>
      <td className="border border-gray-100 border-opacity-25 px-4 py-2">
        <code className="p-1 rounded bg-gray-900">{props.className}</code>{" "}
      </td>
      <td className="border border-gray-100 border-opacity-25 px-2 font-sans">
        {props.label}
      </td>
    </tr>
  );
};

export const UsageTable: React.FC = () => {
  return (
    <ContentArea className="mb-64 col-span-12 lg:col-span-6">
      <article>
        <ContentTitle>Class Names</ContentTitle>

        <table className="w-full table-auto">
          <thead className="font-sans text-sm tracking-widest">
            <tr>
              <th className="px-4 py-2 text-left uppercase">Class Name</th>
              <th className="px-4 py-2 text-left uppercase">Flag</th>
            </tr>
          </thead>
          <tbody>
            <TableData className="Gay" label="Gay Pride" />
            <TableData className="BiPlus" label="Bisexual Pride" />
            <TableData className="Trans" label="Transgender Pride" />
            <TableData className="NonBinary" label="Non-binary Pride" />
            <TableData className="Asexual" label="Asexual Pride" />
            <TableData className="Pansexual" label="Pansexual Pride" />
            <TableData className="Queer" label="Queer Pride" />
            <TableData className="GayMale" label="Gay Male Pride" />
            <TableData className="Lesbian" label="Lesbian Pride" />
            <TableData className="Intersex" label="Intersex Pride" />
            <TableData className="GenderFluid" label="Genderfluid Pride" />
            <TableData className="Agender" label="Agender Pride" />
            <TableData className="Polyamorous" label="Polyamorous Pride" />
            <TableData className="Omnisexual" label="Omnisexual Pride" />
            <TableData className="Polysexual" label="Polysexual Pride" />
            <TableData className="AroAce" label="Aromantic Asexual Pride" />
            <TableData className="Genderqueer" label="Genderqueer Pride" />
          </tbody>
        </table>
      </article>
    </ContentArea>
  );
};

export const Usage: React.FC = () => {
  return (
    <ContentArea className="mb-64 col-span-12 lg:col-span-6">
      <article>
        <ContentTitle>Usage</ContentTitle>
        <p className="mb-4 text-lg">Install it from npm</p>
        <pre className="w-full p-4 mb-4 bg-gray-900 rounded">
          <code>yarn add lgbtq.css</code>
        </pre>
        <p className="mb-4 text-lg">Add it in your CSS:</p>
        <pre className="w-full p-4 mb-4 bg-gray-900 rounded">
          <code className="text-green-400">@import "~lgbtq.css";</code>
        </pre>
        <p className="mb-4 text-lg">
          Then use the class that represents the pride flag you want to use.
          Applying the class to an element will change it's background.
        </p>
      </article>
    </ContentArea>
  );
};
