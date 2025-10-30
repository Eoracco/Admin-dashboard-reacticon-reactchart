/** @type {import('next').NextConfig} */
const nextConfig = {
  // 删除 output: 'export'
  // 删除 basePath
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig