/** @type {import("next").NextConfig} */
const nextConfig =
{
  typescript:
  {
    ignoreBuildErrors: true
  },
  images:
  {
    domains: ["storage.googleapis.com"]
  }
};

module.exports = nextConfig;