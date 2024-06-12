/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  env: {
    CONTENTFUL_SPACE_ID: "wxwsagx2fy4n",
    CONTENTFUL_ACCESS_TOKEN: "_x1MXaBTWMIS6Rz_AsPbP7tFrvoqigNhmGWQrW-EJuM",
  },
};

export default nextConfig;
