import React, { useState } from 'react';
import PendingVerification from '../src/components/verification/PendingVerification';
import { AuthContext } from '../utils/GlobalState';

function VerificationPage() {
  const [authState] = React.useContext(AuthContext);
  const [pendingVerification, setPendingVerification] = useState<any>([]);

  React.useEffect(() => {
    (async () => {
      //http://127.0.0.1:3090
      await fetch(
        'https://occupy-it.herokuapp.com/admin/pending_verifications',
        {
          headers: {
            Authorization: `Bearer ${authState?.tokens.access_token}`,
          },
        },
      )
        .then((res) => res.json())
        .then((data: any) => setPendingVerification(data))
        .catch((err) => err instanceof TypeError);
    })();
  }, [authState]);
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <PendingVerification pending={pendingVerification} />
    </div>
  );
}
export default VerificationPage;
