import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from '../utils';
import Login from './Login';
import SignUp from './SignUp';

function Auth() {
  const [loginValues, setLoginValue] = useForm({
    email: '',
    password: '',
  });
  const [values, setValue] = useForm({
    email: '',
    password: '',
    confirm_password: '',
    ID: '',
    firstname: '',
    lastname: '',
  });
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [isSignUp, setSignUp] = useState(true);

  const onSubmit = (data: any) => {
    const newUser = {
      names: {
        firstname: values.firstname,
        lastname: values.lastname,
      },
      email: values.email,
      password: values.password,
      phoneNumber,
      ID: values.ID,
    };

    console.log(data);
  };
  const handleLogin = (data:any) => {
    const user = {
      email: values.email,
    };
    console.log(data)
  }
  return (
    <Container>
      {isSignUp ? (
        <Login setSignUp={setSignUp} setValue={setLoginValue} {...loginValues} handleLogin={handleLogin} />
      ) : (
        <SignUp
          setSignUp={setSignUp}
          setValue={setValue}
          {...values}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          onSubmit={onSubmit}
        />
      )}
    </Container>
  );
}
export default Auth;
