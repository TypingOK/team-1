/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["design-kit"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com",
      },{
        protocol:"https",
        hostname:"cdn.discordapp.com",
      }
    ],
  },
};

module.exports = nextConfig;
