import React, { createContext, useState }  from 'react';
import type { AppProps } from 'next/app';
import Layout from '../src/components/layout/mainLayout';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {

  const AuthContex = createContext({})
  const [authState, setAuthState] = useState({
    _id: '',
    tokens: {
      access_token: '',
      refresh_token: '',
    },
    names: {
      firstname: '',
      lastname: '',
    },
    ID: 0,

  }
  )
  return (
    <Layout>
      <AuthContex.Provider value={[authState, setAuthState]}>
        <Component {...pageProps} />
      </AuthContex.Provider>
    </Layout>
  );
}

export default MyApp;
