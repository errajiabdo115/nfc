/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nfc",
  assetPrefix: "/nfc",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
