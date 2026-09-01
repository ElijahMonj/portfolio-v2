/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 defaults to qualities: [75]; keep 100 so high-quality images aren't silently downgraded.
    qualities: [75, 100],
  },
  async redirects() {
    // The site is a single page now; these routes live on as anchors.
    return [
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/projects/capstone', destination: '/#case-study', permanent: true },
    ];
  },
};

export default nextConfig;
