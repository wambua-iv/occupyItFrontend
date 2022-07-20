import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { Hr } from '../../styles';
import Link from 'next/link';

function PropertyBooking({ bookings }: any) {
  return bookings.length > 0 ? (
    <Container
      maxWidth="md"
      sx={{
        border: '1px solid #9996',
        p: 2,
        borderRadius: '1rem',
        backgroundColor: '#fff5',
      }}
    >
      <Typography variant="h5">Property Bookings</Typography>
      <Paper>
        {bookings?.map((user: any) => (
          <Box key={user._id}>
            <Box
              sx={{
                px: 2,
                py: 1,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{ textTransform: 'capitalize' }}
              >{`${user.tenants[0].name}`}</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: '#999' }}>
                {user.tenants[0].email}
              </Typography>
              <Typography sx={{ color: '#0007' }}>
                {user.tenants[0].id}
              </Typography>
              <Link
                href={{
                  pathname: '/verify_booking',
                  query: { _id: user._id },
                }}
              >
                <Button>Verify</Button>
              </Link>
            </Box>
            <Hr />
          </Box>
        ))}
      </Paper>
    </Container>
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
export default PropertyBooking;
