import Document, { Html, Head, Main, NextScript } from 'next/document'
import Cookies from 'js-cookie'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    let theme
    if (ctx.req && 'cookies' in ctx.req) {
      const { req } = ctx

      theme = req.cookies.theme || 'light'
    } else {
      theme = Cookies.get('theme') === 'dark' ? 'dark' : 'light'
    }

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, theme }
  }

  render() {
    const { theme } = this.props
    return (
      <Html>
        <Head />
        <body className={theme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
