/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "http://localhost:8000",
    NEXT_PUBLIC_SECRET: "nyambaa",
  },
};

module.exports = nextConfig;
