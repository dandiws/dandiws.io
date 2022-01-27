/* eslint-disable react/display-name */
import Blockquote from '../components/Blockquote'
import ExternalLink from '../components/ExternalLink'
import Author from '../components/Author'
import Image from 'next/image'

const mdxcomponents = {
  h1: (props) => <h1 {...props} className="font-bold text-3xl mb-5" />,
  h2: (props) => <h2 {...props} className="font-bold text-2xl mb-5" />,
  h3: (props) => <h3 {...props} className="font-bold text-xl mb-5" />,
  h4: (props) => <h4 {...props} className="font-bold text-lg mb-4" />,
  h5: (props) => <h5 {...props} className="font-semibold text-base mb-4" />,
  h6: (props) => <h6 {...props} className="font-semibold text-sm mb-3" />,
  p: (props) => <p {...props} className="mb-8 leading-7" />,
  ul: (props) => <ul {...props} className="mb-8" />,
  ol: (props) => <ol {...props} className="mb-8" />,
  blockquote: (props) => <Blockquote mb={6} {...props} />,
  a: ExternalLink,
  Image,
  Author
}

export default mdxcomponents
