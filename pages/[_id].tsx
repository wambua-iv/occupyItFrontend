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
          await fetch('http://127.0.0.1:3090/properties/id', {
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
  console.log(listing);

  return listing?.length > 0 ? (
    <div style={{ width: '100%', margin: 0 }}>
      <PropertyView listing={listing} />
    </div>
  ) : (
    <Loading />
  );
}
export default PropertyViewPage;
