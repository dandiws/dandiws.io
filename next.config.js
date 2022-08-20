const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const withPWA = require('next-pwa')

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleAnalyzer(
  withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development'
    },
    swcMinify: true,
    experimental: { images: { allowFutureImage: true } }
  })
)
