import React from 'react';
import { useRouter } from 'next/router';
import PropertyView from '../src/components/property-listings/PropertyView';
import { Loading } from '../src/components/utils';

function PropertyViewPage() {
  const [listing, setListing] = React.useState<any>([]);
  const router = useRouter();
  const _id = router.query || '';

  React.useEffect(() => {
    _id?._id
      ? (async () => {
          //https://occupy-it.herokuapp.com
          await fetch('https://occupy-it.herokuapp.com/properties/id', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(_id),
          })
            .then((res) => res.json())
            .then((data) => setListing(data))
            .catch();
        })()
      : setListing(null);
  }, [setListing, _id]);
 
  return listing?.length > 0 ? (
    <div style={{ width: '100%', margin: 0 }}>
      <PropertyView listing={listing} />
    </div>
  ) : (
    <Loading />
  );
}
export default PropertyViewPage;
