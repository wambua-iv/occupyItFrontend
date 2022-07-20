import React from 'react';
import { Paper, Box, Grid, Typography, Container } from '@mui/material';
import { SpacedTypograph, WeightedTypography } from '../../styles';
import { Property } from '.';
import Link from 'next/link';

function ViewBooking({ booking }: any) {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 2,
        }}
      >
        Property Bookings
      </Typography>
      {booking?.map((listing: Property) => (
        <Paper
          key={listing._id}
          sx={{
            p: 2,
            backgroundColor: '#fff',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ width: '90%' }}>
            <Link
              href={{
                pathname: '/[_id]',
                query: { _id: listing._id },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.5rem', md: '1.6rem' },
                  mb: 2,
                }}
              >
                {listing.property_name}
              </Typography>
            </Link>
            <Typography>{listing.description}</Typography>
            <Typography>{listing.additional_infomation}</Typography>
          </Box>
          <Grid container spacing={2} sx={{ my: 2 }}>
            {listing.images ? (
              listing.images.map((img: string) => (
                <Grid key={img} xs={12} md={6} item>
                  <Box
                    component="img"
                    src={img}
                    sx={{
                      my: 0.5,
                      height: { xs: '200px', md: '250px' },
                      width: { xs: '200px', md: '250px' },
                      borderRadius: '2rem',
                      position: 'relative',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
              ))
            ) : (
              <></>
            )}
          </Grid>
          <hr />
          <Box>
            <SpacedTypograph>
              <WeightedTypography>Property Type: </WeightedTypography>
              <Typography>{listing.type}</Typography>
            </SpacedTypograph>
            <SpacedTypograph>
              <WeightedTypography>Price</WeightedTypography>
              <Typography>ksh {listing.price}</Typography>
            </SpacedTypograph>
            <SpacedTypograph>
              <WeightedTypography>Location</WeightedTypography>
              <Typography>{listing.location}</Typography>
            </SpacedTypograph>
            {listing.contact_information ? (
              <>
                <WeightedTypography>Contact information</WeightedTypography>
                <SpacedTypograph>
                  <WeightedTypography>Email</WeightedTypography>
                  <Typography>{listing.contact_information.email}</Typography>
                </SpacedTypograph>
                <SpacedTypograph>
                  <WeightedTypography>Mobile</WeightedTypography>
                  <Typography>
                    {listing.contact_information.phone_number}
                  </Typography>
                </SpacedTypograph>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Paper>
      ))}
    </Container>
  );
}
export default ViewBooking;
