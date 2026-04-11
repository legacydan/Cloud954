/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "say2eatfilestorage.blob.core.windows.net",
      },
    ],
  },
};

export default nextConfig;
