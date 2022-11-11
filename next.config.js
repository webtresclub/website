/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/mHRhER8C5N', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
