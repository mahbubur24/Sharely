import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000", // your backend port
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
