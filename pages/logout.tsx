import Router from 'next/router';
import React from 'react';
import { Loading } from '../src/components/utils';
import { AuthContext } from '../utils/GlobalState';

function Logout() {
  const[AuthState,setAuthState] = React.useContext(AuthContext)
  React.useEffect(() => {
    sessionStorage.clear();
    setAuthState? setAuthState((AuthState) => ({ ...AuthState, 'logged': false})) : Router.push('/');
    Router.push('/')
  }, [setAuthState, AuthState]);
  return <Loading redirectUrl="/" />;
}

export default Logout;
