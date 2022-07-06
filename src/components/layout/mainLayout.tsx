import React, { ReactNode, useContext, useEffect } from 'react';
import _ from 'lodash';
import { AuthContext } from '../../../utils/GlobalState';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useContext(AuthContext);   
  

  useEffect(() => {
    
    const state = sessionStorage.getItem('state')
      ? sessionStorage.getItem('state')
      : '';
      
if (state && !_.isEqual(JSON.stringify(authState), state)) {
      setAuthState(() => JSON.parse(state));
    }
    
  }, [authState, setAuthState]);
  console.log('authState', authState)

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
