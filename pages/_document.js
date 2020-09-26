import { ColorModeScript } from '@chakra-ui/core'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript defaultColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
