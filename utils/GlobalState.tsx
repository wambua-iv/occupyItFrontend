import React, { ReactNode, createContext, useState, useEffect } from 'react';
import _ from 'lodash';
import Router from 'next/router';

export interface Authenticated {
  logged: boolean;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
  user: {
    email: string;
    name: {
      firstname: string;
      lastname: string;
    };
    ID: number;
    phone_number: number;
    _id: string;
    role: string;
  };
}

type setAutheticated = React.Dispatch<React.SetStateAction<Authenticated>>;

type Context = [Authenticated?, setAutheticated?];

export const AuthContext = createContext<Context>([]);
export function Authprovider({ children }: { children: ReactNode }) {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [authState, setAuthState] = useState<Authenticated>({
    logged: false,
    tokens: {
      access_token: '',
      refresh_token: '',
    },
    user: {
      email: '',
      phone_number: 0,
      name: {
        firstname: '',
        lastname: '',
      },
      ID: 0,
      _id: '',
      role: '',
    },
  });

  useEffect(() => {
    const state = sessionStorage.getItem('state');
    if (state && !_.isEqual(authState, JSON.parse(state))) {
      let newState: Authenticated = JSON.parse(state);
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
          role: newState?.user.role,
          phone_number: newState?.user.phone_number,
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
