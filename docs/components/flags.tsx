interface IFlagDatumProps {
	className: string;
	label?: string;
}

const FlagDatum: React.FC<IFlagDatumProps> = (props) => {
	const altText = `Pride flag demo for ${props.className}`;
	return (
		<figure>
			<object aria-label={altText} className={props.className} role="img" />
			{props.label ? <figcaption>{props.label}</figcaption> : null}
			<style jsx>{`
				[role="img"] {
					box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
					width: 100%;
					height: 6rem;
					border-radius: 0.25rem;
				}

				figure {
					margin: 0;
				}

				figcaption {
					text-align: center;
					padding-top: 0.25rem;
					font-family: var(--monospace);
					font-weight: 700;
					text-transform: uppercase;
					opacity: 0.75;
					font-size: 0.75rem;
					letter-spacing: 0.2rem;
				}
			`}</style>
		</figure>
	);
};

export const Flags: React.FC = () => {
	return (
		<div className="grid">
			<FlagDatum className="Gay" label="Gay Pride" />
			<FlagDatum className="BiPlus" label="Bisexual Pride" />
			<FlagDatum className="Trans" label="Transgender Pride" />
			<FlagDatum className="NonBinary" label="Non-binary Pride" />
			<FlagDatum className="Asexual" label="Asexual Pride" />
			<FlagDatum className="Pansexual" label="Pansexual Pride" />
			<FlagDatum className="Queer" label="Queer Pride" />
			<FlagDatum className="GayMale" label="Gay Male Pride" />
			<FlagDatum className="Lesbian" label="Lesbian Pride" />
			<FlagDatum className="Intersex" label="Intersex Pride" />
			<FlagDatum className="GenderFluid" label="Genderfluid Pride" />
			<FlagDatum className="Agender" label="Agender Pride" />
			<FlagDatum className="Polyamorous" label="Polyamorous Pride" />
			<FlagDatum className="Omnisexual" label="Omnisexual Pride" />
			<FlagDatum className="Polysexual" label="Polysexual Pride" />
			<FlagDatum className="AroAce" label="Aromantic Asexual Pride" />
			<FlagDatum className="Genderqueer" label="Genderqueer Pride" />
			<style jsx>
				{`
					div {
						display: grid;
						gap: 1rem;
						grid-template-columns: repeat(2, minmax(0, 1fr));
					}

					@media (min-width: 768px) {
						div {
							grid-template-columns: repeat(4, minmax(0, 1fr));
						}
					}

					@media (min-width: 1024px) {
						div {
							grid-template-columns: repeat(6, minmax(0, 1fr));
						}
					}
				`}
			</style>
		</div>
	);
};
