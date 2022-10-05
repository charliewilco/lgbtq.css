type IconProps = React.SVGProps<SVGSVGElement>;

export const Twitter = (props: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 248 204"
			xmlSpace="preserve"
			className="Icon"
			{...props}
		>
			<path
				d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0022.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0022.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 00104.08 52.76 50.532 50.532 0 0114.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 01-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 01-25.2 26.16z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const GitHub = (props: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			className="Icon"
			{...props}
		>
			<path
				fillRule="evenodd"
				fill="currentColor"
				d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
			/>
		</svg>
	);
};

export const Social: React.VFC = () => {
	return (
		<div className="social">
			<a
				rel="noreferrer"
				target="_blank"
				href="https://github.com/charliewilco/lgbtq.css"
				title="GitHub link to project"
			>
				<GitHub width={24} height={24} />
			</a>
			<a
				rel="noreferrer"
				target="_blank"
				href="https://twitter.com/_charliewilco"
				title="Twitter link to @_charliewilco"
			>
				<Twitter width={24} height={24} />
			</a>
			<style jsx>{`
				.social {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.social > a {
					display: block;
					color: #000;
					margin: 0 1rem;
				}

				@media (prefers-color-scheme: dark) {
					.social > a {
						color: #fff;
					}
				}
			`}</style>
		</div>
	);
};
