import { Alert, Container } from '@mui/material';
import React, { useContext, useState } from 'react';
import _ from 'lodash';
import Login from './Login';
import SignUp from './SignUp';
import Router from 'next/router';

function Auth() {
  const [isSignUp, setSignUp] = useState<boolean>(true);
  const [signUpError, setSignUpError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    setLoading((prev: boolean) => !prev);
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
    setLoading((prev: boolean) => !prev);
    return setSignUp((prev: boolean) => !prev);
  };

  const handleLogin = async (data: any) => {
    setLoading((prev: boolean) => !prev);
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
        setLoading((prev: boolean) => !prev);
        Router.push('/listings');
        setInterval(() => Router.reload(), 1200);
      })
      .catch(() => {
        //Router.reload();
        setLoading((prev: boolean) => !prev);
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
        <Login
          setSignUp={setSignUp}
          handleLogin={handleLogin}
          loading={isLoading}
        />
      ) : (
        <SignUp setSignUp={setSignUp} onSubmit={onSubmit} loading={isLoading} />
      )}
    </Container>
  );
}
export default Auth;
