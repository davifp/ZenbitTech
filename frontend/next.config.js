/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          { key: "Access-Control-Allow-Methods", value: "GET,POST" },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Request-With",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
