/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true
    },
    swcMinify: true
};

module.exports = nextConfig;
