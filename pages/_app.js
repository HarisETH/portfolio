import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
     

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
