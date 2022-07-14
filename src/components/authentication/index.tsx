import { Alert, Container } from '@mui/material';
import React, { useContext, useState } from 'react';
import _ from 'lodash';
import Login from './Login';
import SignUp from './SignUp';
import Router from 'next/router';

function Auth() {
  const [isSignUp, setSignUp] = useState(true);
  const [signUpError, setSignUpError] = useState(false);

  const onSubmit = async (data: any) => {
    const signUpData = {
      email: data?.email,
      firstname: data?.firstname,
      lastname: data?.lastname,
      ID: parseInt(data?.ID),
      phone_number: data?.phone_number,
      password: data?.password,
    };
    const url = 'https://occupy-it.herokuapp.com/auth/signup';

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    }).then((res) => res.json());
    if (data?.name == 'InternalServerErrorException') {
      Router.reload();
    }
    return setSignUp((prev: boolean) => !prev);
  };

  const handleLogin = async (data: any) => {
    const loginData = {
      email: data?.email,
      password: data?.password,
    };

    const url = 'https://occupy-it.herokuapp.com/auth/signin';

    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data?.name == 'InternalServerErrorException') {
          throw new Error();
        }
        sessionStorage.setItem(
          'state',
          JSON.stringify({ ...data, logged: true }),
        );
        return Router.push('/listings');
      })
      .catch(() => {
        //Router.reload();
        setSignUpError((prev: boolean) => !prev);
      });
  };

  return (
    <Container>
      {signUpError ? (
        <Alert
          severity="error"
          sx={{ width: '50%', position: 'relative', left: '25%' }}
        >
          Provide valid email and password
        </Alert>
      ) : null}
      {isSignUp ? (
        <Login setSignUp={setSignUp} handleLogin={handleLogin} />
      ) : (
        <SignUp setSignUp={setSignUp} onSubmit={onSubmit} />
      )}
    </Container>
  );
}
export default Auth;
