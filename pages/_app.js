import Layout from '../components/Layout';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../globals.css';

function MyApp({ Component, pageProps, data }) {
  return (
    <Layout>
      <Head>
        <title>CatWiki</title>
        <meta charset='UTF-8'></meta>
        <meta name='description' content='Free Web tutorials'></meta>
        <meta name='keywords' content='HTML, CSS, JavaScript'></meta>
        <meta name='author' content='John Doe'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <Provider store={store}>
        <Component data={data} {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
