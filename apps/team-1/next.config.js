/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ["design-kit"],
  images: {
    domains: [
      "cdn.discordapp.com",
      "search.pstatic.net",
      "dummyimage.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
      "nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
