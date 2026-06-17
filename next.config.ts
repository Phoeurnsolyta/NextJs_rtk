import type { NextConfig } from "next";
// import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "www.electromart.com.gh",
      },
      {
        protocol: "https",
        hostname: "pngimg.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos"
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      }
    ],
  },
};

export default nextConfig;
