import { Container, Typography } from '@mui/material';
import React from 'react';
import PropertyListings from '../src/components/property-listings';

function PropertyList() {
  const [listings, setListings] = React.useState<any>([]);
  React.useEffect(() => {
    (async () => {
      await fetch('http://127.0.0.1:3090/properties/listings')
      .then((res) => res.json())
        .then((data) => setListings(data))
        .catch();
    })();
  }, [setListings]);

  return listings?.length > 0 ? (
    <div style={{ width: '100%', margin: 0 }}>
      <PropertyListings listings={listings} />
    </div>
  ) : (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        sx={{ my: 25, textAlign: 'center', color: '#0009' }}
      >
        There are no posted properties yet
      </Typography>
    </Container>
  );
}

export default PropertyList;
