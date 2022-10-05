export const UsageTable = () => {
	return (
		<div>
			<aside>
				<table>
					<thead>
						<tr>
							<th>Class Name</th>
							<th>Flag</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>Gay</code>
							</td>
							<td>Gay Pride</td>
						</tr>
						<tr>
							<td>
								<code>BiPlus</code>
							</td>
							<td>Bisexual Pride</td>
						</tr>
						<tr>
							<td>
								<code>Trans</code>
							</td>
							<td>Transgender Pride</td>
						</tr>
						<tr>
							<td>
								<code>NonBinary</code>
							</td>
							<td>Non-binary Pride</td>
						</tr>
						<tr>
							<td>
								<code>Asexual</code>
							</td>
							<td>Asexual Pride</td>
						</tr>
						<tr>
							<td>
								<code>Pansexual</code>
							</td>
							<td>Pansexual Pride</td>
						</tr>
						<tr>
							<td>
								<code>Queer</code>
							</td>
							<td>Queer Pride</td>
						</tr>
						<tr>
							<td>
								<code>GayMale</code>
							</td>
							<td>Gay Male Pride</td>
						</tr>
						<tr>
							<td>
								<code>Lesbian</code>
							</td>
							<td>Lesbian Pride</td>
						</tr>
					</tbody>
				</table>
			</aside>
			<aside>
				<table>
					<thead>
						<tr>
							<th>Class Name</th>
							<th>Flag</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<code>Intersex</code>
							</td>
							<td>Intersex Pride</td>
						</tr>
						<tr>
							<td>
								<code>GenderFluid</code>
							</td>
							<td>Genderfluid Pride</td>
						</tr>
						<tr>
							<td>
								<code>Agender</code>
							</td>
							<td>Agender Pride</td>
						</tr>
						<tr>
							<td>
								<code>Polyamorous</code>
							</td>
							<td>Polyamorous Pride</td>
						</tr>
						<tr>
							<td>
								<code>Omnisexual</code>
							</td>
							<td>Omnisexual Pride</td>
						</tr>
						<tr>
							<td>
								<code>Polysexual</code>
							</td>
							<td>Polysexual Pride</td>
						</tr>
						<tr>
							<td>
								<code>AroAce</code>
							</td>
							<td>Aromantic Asexual Pride</td>
						</tr>
						<tr>
							<td>
								<code>Genderqueer</code>
							</td>
							<td>Genderqueer Pride</td>
						</tr>
					</tbody>
				</table>
			</aside>

			<style jsx>{`
				div {
					display: grid;
					gap: 2rem;
					grid-template-columns: repeat(12, minmax(0, 1fr));
				}

				aside {
					grid-column: span 12 / span 12;
				}

				table {
					table-layout: auto;
					width: 100%;
					margin-right: auto;
					border-spacing: 0;
					border-collapse: collapse;
				}

				thead {
					font-family: var(--sans-serif);
				}

				th {
					padding: 0.5rem;
					text-align: left;
				}

				td {
					border: 1px solid rgba(20, 20, 20, 0.25);
					margin: 0;
				}
				td:first-of-type {
					padding: 0.5rem 1rem;
				}
				td:last-of-type {
					font-family: var(--sans-serif);
					padding-left: 0.5rem;
					padding-right: 0.5rem;
				}

				code {
					font-family: var(--monospace);
					padding: 0.25rem;
					border-radius: 0.25rem;
					font-size: small;
					padding: 0.25rem;
				}

				@media (min-width: 768px) {
					aside {
						grid-column: span 6 / span 6;
					}
				}

				@media (prefers-color-scheme: dark) {
					td {
						border: 1px solid rgba(247, 250, 252, 0.25);
					}
				}
			`}</style>
		</div>
	);
};
