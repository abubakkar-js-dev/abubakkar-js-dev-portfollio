/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;

// Note: To enable bundle analyzer, install @next/bundle-analyzer:
// npm install --save-dev @next/bundle-analyzer
// Then uncomment the code below and run: ANALYZE=true npm run build

// import bundleAnalyzer from '@next/bundle-analyzer';
// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });
// export default withBundleAnalyzer(nextConfig);
