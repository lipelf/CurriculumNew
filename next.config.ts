import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['172.23.8.36', '192.168.0.244']
};

export default nextConfig;
