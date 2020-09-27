const withMDXExtended = require('@saschazar/next-mdx-extended')({
  format: '/blog/[title]',
  remarkPlugins: [require('remark-code-titles')],
  rehypePlugins: [require('mdx-prism')],
  parseFilename: false,
})

module.exports = withMDXExtended({
  pageExtensions: ['jsx', 'js', 'mdx', 'md'],
})
