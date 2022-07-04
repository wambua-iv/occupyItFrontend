import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from '../utils';
import Login from './Login';
import SignUp from './SignUp';

function Auth() {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [isSignUp, setSignUp] = useState(true);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleLogin = (data: any) => {
    console.log(data);
  };
  return (
    <Container>
      {isSignUp ? (
        <Login setSignUp={setSignUp} handleLogin={handleLogin} />
      ) : (
        <SignUp setSignUp={setSignUp} onSubmit={onSubmit} />
      )}
    </Container>
  );
}
export default Auth;
