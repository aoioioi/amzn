import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    function toggleStyleSSR() {
      if (typeof window === 'object') {
        return document.querySelector('body').classList.remove('overflow-hidden')
      }
    }

    return (
      <Html>
        <Head />
        <body id="body" className=''>
          {/* <div id="overlay" onClick={toggleStyleSSR}></div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
