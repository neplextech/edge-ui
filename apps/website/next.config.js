const withMdx = require('@next/mdx')({
    extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    typescript: {
        ignoreBuildErrors: true
    },
    swcMinify: true,
    experimental: {
        mdxRs: true
    }
};

module.exports = withMdx(nextConfig);
