import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
