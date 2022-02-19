/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';

import Layout from '../components/Functional/Layout/Layout';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../context';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist'

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Layout>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
