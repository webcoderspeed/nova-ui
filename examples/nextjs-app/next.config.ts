import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias['@nova-ui'] = path.resolve(__dirname, '../../src');
    return config;
  },
};

export default nextConfig;
