import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
        providerImportSource: "@mdx-js/react",
    },
})

/**
 * @type {import('next').NextConfig}
 */
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

export default withMDX(nextConfig);
