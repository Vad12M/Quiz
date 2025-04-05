import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  compress: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'cache-control',
            value: 'public, s-maxage=600',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
