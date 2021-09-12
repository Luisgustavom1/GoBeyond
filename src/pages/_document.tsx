/* eslint-disable @next/next/no-document-import-in-page */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="theme-color" />
          <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com" 
          />
          <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com" 
            crossOrigin = 'true'
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap" 
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}