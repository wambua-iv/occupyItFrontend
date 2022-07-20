import { useRouter } from 'next/router';
import React from 'react';
import Verification from '../src/components/verification';
import { AuthContext } from '../utils/GlobalState';

function VerificationPage() {
  const [newOwner, setNewOwner] = React.useState<any>([]);
  const [authState] = React.useContext(AuthContext);
  const router = useRouter();
  const ID = router.query || '';
  console.log(ID);
  React.useEffect(() => {
    ID?.ID
      ? (async () => {
          //https://occupy-it.herokuapp.com
          await fetch(
            'https://occupy-it.herokuapp.com/admin/get_unverified_owner',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authState?.tokens.access_token}`,
              },
              body: JSON.stringify(ID),
            },
          )
            .then((res) => res.json())
            .then((data) => setNewOwner(data))
            .catch();
        })()
      : setNewOwner(null);
  }, [setNewOwner, ID, authState]);
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Verification verify={newOwner} />
    </div>
  );
}
export default VerificationPage;
