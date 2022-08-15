import Document, { Head, Html, Main, NextScript } from 'next/document'

class Site extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Site
