/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.fotosklad.ru",
        port: "",
        pathname: "/unsafe/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
