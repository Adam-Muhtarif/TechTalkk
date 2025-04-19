import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
