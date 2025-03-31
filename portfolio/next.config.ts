import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Add PDF file handling
    config.module.rules.push({
      test: /\.(pdf)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext][query]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;

export default nextConfig;
