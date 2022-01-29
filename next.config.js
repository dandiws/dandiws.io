const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleAnalyzer({
  swcMinify: true
})
