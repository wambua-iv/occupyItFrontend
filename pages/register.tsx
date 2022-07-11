import React from 'react';
import Registration from '../src/components/property-owner-dashboard/Registration';

interface User {}

function Register() {
    const user ={ name: {
        firstname: 'Messy',
        lastname: 'Wambua'
    },
    ID: 36454545,
    phone_number: '0728455643',
    email: 'musalu@gmail.com',
    _id: 'ejafdjp',
    }
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Registration {...user} />
    </div>
  );
}

export default Register;