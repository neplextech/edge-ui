/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
    typescript: {
        ignoreBuildErrors: true
    },
    swcMinify: true
};

export default nextConfig;
