const withMdxEnhanced = require('next-mdx-enhanced')
const remarkCodeTitles = require('remark-code-titles')
const rehypeMdxPrism = require('mdx-prism')
const readingTime = require('reading-time')
const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [remarkCodeTitles],
  rehypePlugins: [rehypeMdxPrism],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      return {
        read_time: readingTime(mdxContent),
        published_at:
          frontMatter.published_at && dayjs(frontMatter.published_at).valueOf(),
        published_at_formatted:
          frontMatter.published_at &&
          dayjs(frontMatter.published_at).format('DD MMMM YYYY'),
      }
    },
    // phase: 'prebuild',
  },
  reExportDataFetching: false,
})()
