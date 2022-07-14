import { NextPageContext } from 'next';
import React from 'react';
import PropertyListings from '../src/components/property-listings';

function PropertyList({ props }: any) {
 const [listings, setListings] =React.useState<any>([])
 React.useEffect(() =>{
  (async() => {
    await fetch('http://127.0.0.1:3090/properties/listings')
    .then((res) => res.json())
    .then((data) => setListings(data))
    .catch()
  })()
 }, [setListings])

  return (
    <div style={{ width: '100%', margin: 0 }}>
      <PropertyListings listings={listings}/>
    </div>
  );
}

export default PropertyList;
