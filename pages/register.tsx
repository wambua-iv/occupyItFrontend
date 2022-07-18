import React from 'react';
import Registration from '../src/components/property-owner-dashboard/Registration';
import { AuthContext } from '../utils/GlobalState';

function Register() {
  const [authState] = React.useContext(AuthContext);
  const user = {
    name: {
      firstname: authState?.user.name.firstname,
      lastname: authState?.user.name.lastname,
    },
    ID: authState?.user.ID,
    phone_number: authState?.user.phone_number,
    email: authState?.user.email,
    _id: authState?.user._id,
  };
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Registration {...user} />
    </div>
  );
}

export default Register;
