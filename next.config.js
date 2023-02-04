const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

const { withContentlayer } = require('next-contentlayer')

/** @type import('next').NextConfig */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true
  }
}

module.exports = withBundleAnalyzer(withPWA(withContentlayer(nextConfig)))
