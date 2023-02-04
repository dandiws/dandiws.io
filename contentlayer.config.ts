import {
  defineDocumentType,
  makeSource,
  ComputedFields
} from 'contentlayer/source-files'
import readingTime from 'reading-time'
// import remarkCodeTitles from 'remark-code-titles'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'

const computedFields: ComputedFields = {
  slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath },
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) }
}

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: 'blog',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles]
  }
})
