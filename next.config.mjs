/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        // Optional: Add a pathname if needed
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
