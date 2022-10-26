import React, { useState } from 'react';
import _ from 'lodash';
import AuthCard from './Auth';
import Router from 'next/router';
import { Authenticated } from '../../../utils/GlobalState';
import { Container, Alert } from '@mui/material';

interface AuthInterface {
  authState: Authenticated,
  setAuthState: React.Dispatch<React.SetStateAction<Authenticated>>;
}

function Auth({authState, setAuthState}: AuthInterface) {
  const [isSignUp, setSignUp] = useState<boolean>(false);
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

    await fetch('http://10.0.0.4:3090/auth/signup', {
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


    return await fetch('http://10.0.0.4:3090/auth/signin', {
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
        setAuthState?.(() => ({
          ...authState,
          logged: true,
        }));
        setTimeout(() =>{
          setLoading((prev: boolean) => !prev);
          Router.push('/listings');
        }, 2000);
      })
      .catch(() => {
        setLoading((prev: boolean) => !prev);
        setSignUpError((prev: boolean) => !prev);
      });
  };

  return (
        <Container maxWidth="lg" sx={{ p: 0, m: 0 }}>
        {signUpError ? (
          <Alert
            severity="error"
            sx={{ width: '50%', position: 'relative', left: '25%' }}
          >
            Provide valid email and password
          </Alert>
        ) : null}
  
        <AuthCard
          setSignUp={setSignUp}
          handleLogin={handleLogin}
          loading={isLoading}
          isSignUp={isSignUp}
          onSubmit={onSubmit}
        />
      </Container>
  );
}
export default Auth;
