/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/iceeeeli.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/iceeeeli.github.io/' : '',
}

module.exports = nextConfig 