import { Container } from '@mui/material';
import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Router from 'next/router';


function Auth() {
  const [isSignUp, setSignUp] = useState(true);

  const onSubmit = async (data: any) => {
    console.log(data);
    const signUpData = {
      email: data?.email,
      firstname: data?.firstname,
      lastname: data?.lastname,
      ID: parseInt(data?.ID),
      phone_number: data?.phone_number,
      password: data?.password,
    };
    const url = 'https://occupy-it.herokuapp.com/auth/signup'; 

    const tokens = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    }).then((res) => res.json());
    console.log(tokens);
    return setSignUp((prev: boolean) => !prev);
  };

  const handleLogin = async (data: any) => {
    const loginData = {
      email: data?.email,
      password: data?.password,
    };
    const url = 'https://occupy-it.herokuapp.com/auth/signin';
    const tokens = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        Router.push('/listings');
        return data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
