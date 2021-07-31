import Layout from '../components/Layout';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import '../globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>CatWiki</title>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
