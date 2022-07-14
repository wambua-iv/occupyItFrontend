import React, { ReactNode, useContext, useEffect, useLayoutEffect } from 'react';
import _ from 'lodash';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
