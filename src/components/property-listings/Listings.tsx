import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface ListingType {
  id: number;
  image: any;
  title: string;
  description: string;
  location: string;
  amenities?: string[];
  price: number;
}

function Listings() {
  const listings = [
    {
      id: 1,
      image: '/home2.jpg',
      title: 'Executive Apartments',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum eos, veritatis animi eligendi impedit voluptas obcaecati culpa eveniet amet, laboriosam, assumenda vero ipsa doloribus modi quidem. Voluptatibus, itaque unde.',
      location: 'Juja',
      amenities: ['garage', 'wifi'],
      price: 25000,
    },
    {
      id: 2,
      image: '/home2.jpg',
      title: 'Executive Apartments 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum eos, veritatis animi eligendi impedit voluptas obcaecati culpa eveniet amet, laboriosam, assumenda vero ipsa doloribus modi quidem. Voluptatibus, itaque unde.',
      location: 'Juja',
      price: 25000,
    },
    {
      id: 3,
      image: '/home2.jpg',
      title: 'Executive Apartments 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum eos, veritatis animi eligendi impedit voluptas obcaecati culpa eveniet amet, laboriosam, assumenda vero ipsa doloribus modi quidem. Voluptatibus, itaque unde.',
      location: 'Juja',
      price: 25000,
    },
    {
      id: 4,
      image: '/home2.jpg',
      title: 'Executive Apartments 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum eos, veritatis animi eligendi impedit voluptas obcaecati culpa eveniet amet, laboriosam, assumenda vero ipsa doloribus modi quidem. Voluptatibus, itaque unde.',
      location: 'Juja',
      price: 25000,
    },
  ];
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 2, backgroundColor: '#e5e5e5', borderRadius: '.5rem' }}>
        <Typography variant="h5">Rental Properties</Typography>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            {listings.map((listing) => (
              <Grid item key={listing.id} xs={12} sm={6} md={3}>
                <LIstingCards {...listing} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

function LIstingCards({ image, title, price, location, amenities }: ListingType) {
  return (
    <Paper
      sx={{
        p: 0,
        borderRadius: '1rem',
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          margin: 'auto',
          width: '100%',
          height: '13rem',
          borderRadius: '1rem',
          objectFit: 'cover',
        }}
      />
      <Link href={title}>
        <Typography sx={{ fontWeight: 600, px: 1, mt: 1, cursor: 'pointer' }}>{title}</Typography>
      </Link>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, px: 1 }}>
        <Typography variant="subtitle2">Price</Typography>
        <Typography sx={{ fontSize: '.95rem', fontWeight: 600 }}>Ksh. {price}</Typography>
      </Box>

      {amenities ? <Typography sx={{ px: 2, fontSize: '.85rem', fontWeight: 600 }}>Amenities</Typography> : <div></div>}
      {amenities?.map((amenity) => (
        <Typography key={amenity} sx={{ px: 2, fontSize: '.75rem', textAlign: 'right' }}>
          {amenity}
        </Typography>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2, px: 1 }}>
        <Typography variant="subtitle2">Location</Typography>
        <Typography>{location}</Typography>
      </Box>
    </Paper>
  );
}

export default Listings;
