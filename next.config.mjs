/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // NEXT_PUBLIC_RIFT_API_KEY: undefined,
  },
  compiler: {
    // Remove console logs in production environments
    removeConsole: process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
  },
};

export default nextConfig;
