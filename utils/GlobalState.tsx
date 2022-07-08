import React, { ReactNode, createContext, useState, useEffect } from 'react';
import _ from 'lodash';

export const AuthContext = createContext<any>([]);
export function Authprovider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<any>({
    logged: false,
    tokens: {
      access_token: '',
      refresh_token: '',
    },
    user: {
      email: '',
      name: {
        firstname: '',
        lastname: '',
      },
      ID: 0,
      _id: '',
    },
  });

  useEffect(() => {
    const state = sessionStorage.getItem('state');
    console.log('my,y', state);
    if (state && !_.isEqual(authState, JSON.parse(state))) {
      let newState = JSON.parse(state);
      setAuthState(() => ({
        logged: newState?.logged,
        tokens: {
          access_token: newState.tokens.access_token,
          refresh_token: newState?.tokens.refresh_token,
        },
        user: {
          email: newState?.user.email,
          ID: newState?.user.ID,
          name: {
            firstname: newState?.user.name.firstname,
            lastname: newState?.user.name.lastname,
          },
          _id: newState?.user._id,
        },
      }));
    }
  }, [authState, setAuthState]);

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
}
