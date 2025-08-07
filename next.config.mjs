/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ THIS is the key change
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
