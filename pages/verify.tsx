import { useRouter } from 'next/router';
import React from 'react';
import Verification from '../src/components/verification';
import { AuthContext } from '../utils/GlobalState';

function VerificationPage() {
    const [newOwner, setNewOwner] = React.useState<any>([]);
    const [authState] = React.useContext(AuthContext);
    const router = useRouter();
    const ID = router.query || '';
    console.log(ID)
    React.useEffect(() => {
      ID?.ID
      ? (async () => {
        let userID = parseInt(ID?.ID)
        //https://occupy-it.herokuapp.com
          await fetch('http://127.0.0.1:3090/admin/get_unverified_owner', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ID: userID}),
          })
            .then((res) => res.json())
            .then((data) => setNewOwner(data))
            .catch();
        })()
        : setNewOwner(null);
    }, [setNewOwner, ID])
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Verification verify={newOwner} />
    </div>
  );
}
export default VerificationPage;
