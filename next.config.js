/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/western-idaho-trucking',
    assetPrefix: '/western-idaho-trucking',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
