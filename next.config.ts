import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@vapi-ai/web': path.resolve(__dirname, 'node_modules/@vapi-ai/web/dist/vapi.js'),
      };
    }
    return config;
  },
  transpilePackages: ['@vapi-ai/client-sdk-react', '@vapi-ai/web'],
};

export default nextConfig;
// Orchids restart: 1759903924364
