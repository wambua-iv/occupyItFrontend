import React from 'react';
import PropertyBooking from '../src/components/property-owner-dashboard/PropertyBookings';
import { AuthContext } from '../utils/GlobalState';

function Bookings() {
  const [bookings, setBooking] = React.useState<any>([]);
  const [authState] = React.useContext(AuthContext);
  React.useEffect(() => {
    (async () =>
      await fetch(
        'https://occupy-it.herokuapp.com/properties/property_bookings',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authState?.tokens.access_token}`,
          },
          body: JSON.stringify({ ID: authState?.user.ID })
        },
      )
      .then(res => res.json())
      .then(data => setBooking(data)))();
  }, [setBooking, authState]);

  return <PropertyBooking bookings={bookings} />

}
export default Bookings;
