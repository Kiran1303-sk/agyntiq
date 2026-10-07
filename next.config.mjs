/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  devIndicators: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|woff2))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
