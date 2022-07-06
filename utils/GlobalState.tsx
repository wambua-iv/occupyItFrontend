import React, { ReactNode, createContext, useState } from 'react';

export const AuthContext = createContext<any>([]);
export function Authprovider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<any>({
    logged: false,
    _id: '',
    tokens: {
      access_token: '',
      refresh_token: '',
    },
    name: {
      firstname: '',
      lastname: '',
    },
    ID: 0,
  });

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
}
