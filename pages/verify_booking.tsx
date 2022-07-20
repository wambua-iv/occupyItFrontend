import { Container, Typography } from '@mui/material';
import React from 'react';
import { AuthContext } from '../utils/GlobalState';
import { useRouter } from 'next/router';

function VerifyBooking() {
  const [booking, setBooking] = React.useState<any>();
  const [authState] = React.useContext(AuthContext);
  const router = useRouter();
  const _id = router.query || '';

  React.useEffect(() => {
    _id._id
      ? (async () =>
          await fetch(
            'https://occupy-it.herokuapp.com/properties/property_booking',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authState?.tokens.access_token}`,
              },
              body: JSON.stringify({ ID: authState?.user.ID, _id: _id._id }),
            },
          )
            .then((res) => res.json())
            .then((data) => setBooking(data)))()
      : setBooking([]);
  }, [setBooking, authState]);

  console.log(booking);

  return booking?.length > 0 ? (
    <div style={{ width: '100%', margin: 0 }}></div>
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
export default VerifyBooking;
