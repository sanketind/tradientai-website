/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['skouvqrkcwlmvegymyoy.supabase.co'],
    unoptimized: true,
  },
}

module.exports = nextConfig 