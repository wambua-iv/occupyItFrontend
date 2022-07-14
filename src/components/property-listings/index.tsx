import { ArrowRight } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { SearchBar } from '../utils';
import Listings from './Listings';

export interface ListingType {
  type: string;
  ownerId: number;
  _id: string;
  images: any[];
  property_name: string;
  description: string;
  location: string;
  price: number;
  additional_information?: string;
  contact_information: {
    email: string;
    phone_number: string;
  },
  amenities?: {
    bedrooms: string;
    washroom: string;
  }
}

function PropertyListings({listings}: any) {
  return (
    <Container maxWidth="lg">
      <Listings listings={listings} />
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#7c28f247',
          height: { xs: '160px', md: '250px' },
          mt: { xs: 5, md: 15 },
          borderRadius: '10px',
          position: 'relative',
          width: '90%',
        }}
      >
        <Box
          sx={{
            width: { xs: '30px', md: '96px' },
            height: { xs: '30px', md: '96px' },
            backgroundColor: '#7C28F2',
            borderRadius: '50%',
            position: 'absolute',
            top: { xs: '70%', md: '50%' },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            right: '10%',
            top: { xs: '20%', md: '40%' },
          }}
        >
          <SearchBar />
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1rem', md: '2rem' },
              color: '#fff',
              width: { xs: '60%', md: 'auto' },
            }}
          >
            Haven&apos;t found a desired space yet?
          </Typography>
          <Button
            variant="contained"
            sx={{ borderRadius: '0 3rem 3rem  3rem', backgroundColor: '#7C28F2', color: '#fff', px: 4 }}
          >
            Explore More
            <ArrowRight />
          </Button>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: '#7C28F2',
            width: { xs: '138px', md: '360px' },
            height: { xs: '138px', md: '360px' },
            clipPath: 'circle(46.5% at 99% 99%)',
            right: 0,
            bottom: 0,
            borderBottomRightRadius: '10px',
          }}
        />
      </Container>
    </Container>
  );
}
export default PropertyListings;
