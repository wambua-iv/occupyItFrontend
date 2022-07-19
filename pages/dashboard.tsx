import Router, { useRouter } from 'next/router';
import React from 'react';
import PropertyOwner from '../src/components/property-owner-dashboard';
import { AuthContext } from '../utils/GlobalState';

function DashBoard() {
  const [authState] = React.useContext(AuthContext);
  const [listings, setListings] = React.useState<any>([]);
  const router = useRouter();
  const ID = router.query.ID || '';
  console.log(typeof(ID));

  React.useEffect(() => {
    ID
      ? (async () => {
          //https://occupy-it.herokuapp.com
          await fetch('https://occupy-it.herokuapp.com/owners/view_properties', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authState?.tokens.access_token}`,
            },
            body: JSON.stringify({ ID: authState?.user.ID}),
          })
            .then((res) => res.json())
            .then((data: any) => {
              if (data?.name == 'InternalServerErrorException') {
                throw new Error();
              }
              setListings(data);
            })
            .catch((err) => console.log(err));
        })()
      : setListings([]);
  }, [setListings, ID, authState]);

  return (
    <div style={{ width: '100%', margin: 0 }}>
      <PropertyOwner listings={listings} />
    </div>
  );
}
export default DashBoard;
