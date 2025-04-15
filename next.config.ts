import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['miro.medium.com', 'abcmperformances.com', 'images.pexels.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
};

export default nextConfig;
