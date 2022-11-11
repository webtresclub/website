/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/mHRhER8C5N',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
