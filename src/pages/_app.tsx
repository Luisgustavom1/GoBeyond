import type { AppProps } from 'next/app';
import Script from 'next/script';
import { GlobalStyle } from '../styles/GlobalStyle';


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Script 
        src="https://kit.fontawesome.com/920b5477c4.js" 
        crossOrigin="anonymous"
      ></Script>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
