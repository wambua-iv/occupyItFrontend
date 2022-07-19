import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { ListingType } from '.';

function Listings({ listings }: any) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 2, backgroundColor: '#e5e5e5', borderRadius: '.5rem' }}>
        <Typography variant="h5">Properties</Typography>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            {listings.map((listing: ListingType) => (
              <Grid item key={listing._id} xs={12} sm={6} md={3}>
                <LIstingCards {...listing} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

function LIstingCards({
  _id,
  images,
  property_name,
  price,
  location,
  amenities,
  type
}: ListingType) {
  return (
    <Paper
      sx={{
        p: 0,
        borderRadius: '1rem',
      }}
    >
      <Box
        component="img"
        src={images[0]}
        alt={property_name}
        sx={{
          margin: 'auto',
          width: '100%',
          height: '13rem',
          borderRadius: '1rem',
          objectFit: 'cover',
        }}
      />
      <Link
        href={{
          pathname: '/[_id]',
          query: { _id:  _id  },
        }}
      >
        <Typography sx={{ textTransform: 'capitalize', fontWeight: 600, px: 1, mt: 1, cursor: 'pointer' }}>
          {property_name}
        </Typography>
      </Link>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, px: 1 }}
      >
        <Typography variant="subtitle2">Price</Typography>
        <Typography sx={{ fontSize: '.95rem', fontWeight: 600 }}>
          Ksh. {price}
        </Typography>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', my: 1, px: 1 }}
      >
        <Typography variant="subtitle2">Type</Typography>
        <Typography sx={{ fontSize: '.95rem', fontWeight: 600 }}>
          {type}
        </Typography>
      </Box>

      {amenities ? (
        <Typography sx={{ px: 2, fontSize: '.85rem', fontWeight: 600 }}>
          Amenities
        </Typography>
      ) : (
        <div></div>
      )}
      {amenities ? (
        <>
          <Typography sx={{ px: 2, fontSize: '.75rem', textAlign: 'right' }}>
            {amenities.bedrooms}
          </Typography>
          <Typography sx={{ px: 2, fontSize: '.75rem', textAlign: 'right' }}>
            {amenities.washroom} washroom
          </Typography>
        </>
      ) : (
        <></>
      )}

      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', my: 1, px: 1 }}
      >
        <Typography variant="subtitle2">Location</Typography>
        <Typography>{location}</Typography>
      </Box>
    </Paper>
  );
}

export default Listings;
