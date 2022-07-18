import React, { useState } from 'react';
import PendingVerification from '../src/components/verification/PendingVerification';
import { AuthContext } from '../utils/GlobalState';

function VerificationPage() {
  const [authState] = React.useContext(AuthContext);
  const [pendingVerification, setPendingVerification] = useState<any>([]);

  React.useEffect(() => {
    (async () => {
      //https://occupy-it.herokuapp.com
      await fetch('https://occupy-it.herokuapp.com/admin/pending_verifications', {
        headers: {
          Authorization: `Bearer ${authState?.tokens.access_token}`,
        },
      })
        .then((res) => res.json())
        .then((data: any) => setPendingVerification(data))
        .catch((err) => err instanceof TypeError )
    })();
  }, [authState]);
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <PendingVerification pending={pendingVerification} />
    </div>
  );
}
export default VerificationPage;
