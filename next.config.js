/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/qr',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
