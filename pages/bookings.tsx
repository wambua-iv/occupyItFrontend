import { Container, Typography } from '@mui/material';
import React from 'react';
import ViewBooking from '../src/components/book-property/Bookings';
import { AuthContext } from '../utils/GlobalState';

function Booking() {
  const [booking, setBooking] = React.useState<any>();
  const [authState] = React.useContext(AuthContext);
  React.useEffect(() => {
    (async () =>
      await fetch('http://127.0.0.1:3090/properties/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authState?.tokens.access_token}`,
        },
        body: JSON.stringify({ ID: authState?.user.ID }),
      })
      .then(res => res.json())
      .then(data => setBooking(data))
      )();
  }, [setBooking, authState]);

  console.log(booking)

  return booking?.length > 0 ? (
    <div style={{ width: '100%', margin: 0 }}>
      <ViewBooking booking={booking} />
    </div>
  ) : (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        sx={{ my: 25, textAlign: 'center', color: '#0009' }}
      >
        There are no booked properties yet
      </Typography>
    </Container>
  );
}
export default Booking;