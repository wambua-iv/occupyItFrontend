import React from 'react';
import Auth from '../src/components/authentication';
import { AuthContext } from '../utils/GlobalState';

function Authentication() {
  return (
    <div style={{ width: '100%', height: '100%', margin: 0 }}>
      <AuthContext.Consumer>
        {([authState, setAuthState]) => (
          <Auth authState={authState} setAuthState={setAuthState} />
        )}
      </AuthContext.Consumer>
    </div>
  );
}
export default Authentication;
