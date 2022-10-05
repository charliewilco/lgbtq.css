// @ts-check

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	cleanDistDir: true,
	experimental: {
		gzipSize: true,
	},
};
