/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 defaults to qualities: [75]; keep 100 so high-quality images aren't silently downgraded.
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
