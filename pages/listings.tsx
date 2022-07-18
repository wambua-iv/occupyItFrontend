import { Container, Typography } from '@mui/material';
import { NextPageContext } from 'next';
import React from 'react';
import PropertyListings from '../src/components/property-listings';

function PropertyList({ props }: any) {
 const [listings, setListings] =React.useState<any>([])
 React.useEffect(() =>{
  (async() => {
    await fetch('https://occupy-it.herokuapp.com/properties/listings')
    .then((res) => res.json())
    .then((data) => setListings(data))
    .catch()
  })()
 }, [setListings])

  return listings?.length > 0 ?
    <div style={{ width: '100%', margin: 0 }}>
      <PropertyListings listings={listings}/>
    </div> :
     <Container maxWidth="lg">
     <Typography variant="h4" sx={{my: 25, textAlign: 'center', color: '#0009'}}>
       There are no posted properties yet
     </Typography>
   </Container>
    
}

export default PropertyList;
