import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import { AuthContext } from '../../../utils/GlobalState';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AuthContext.Consumer>
        {([authState]) => <Header authState={authState} />}
      </AuthContext.Consumer>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
