import React, { useContext, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Layout from '../src/components/layout/mainLayout';
import '../src/styles/globals.css';
import { Authprovider } from '../utils/GlobalState';

function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <Authprovider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Authprovider>
  );
}export default MyApp;
