import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

// Check performance compared to 18n - should be faster
// Does i18n create additional routes?
// Is this in correct/consistent format?
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
