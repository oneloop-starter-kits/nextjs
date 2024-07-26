/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ONELOOP_CLIENT_TOKEN: process.env.ONELOOP_CLIENT_TOKEN,
  },
};

export default nextConfig;
