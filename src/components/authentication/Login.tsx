import { Email, LockOpen } from '@mui/icons-material';
import { Box, Container, InputAdornment, Link as MuiLink, Paper, Typography, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React from 'react';
import { CustomButton } from '../../styles';

interface LoginCard {
  setSignUp(prev: any): void;
  setValue(): void;
  handleLogin(): void;
  email: string;
  password: string;
}

function Login({ setSignUp, setValue, handleLogin, email, password }: LoginCard) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container
      maxWidth="lg"
      sx={{ my: 4, height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          width: { xs: '80%', sm: '60%', md: '50%' },
          borderRadius: '2rem',
        }}
      >
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              type="email"
              variant="standard"
              helperText={
                (errors.email?.type === 'pattern' && 'Enter valid email pattern') ||
                (errors.email?.type === 'required' && 'Email feild is required')
              }
              required
              sx={{ mt: 6, width: { sm: '70%', md: '80%' } }}
            />
          )}
        />
        {/*pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ */}

        <Controller
          control={control}
          name="password"
          rules={{ required: true, minLength: 8 }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpen />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              type="password"
              helperText={
                (errors.password?.type === 'required' && 'Password is required') ||
                (errors.password && 'Password length should be longer than 8 characters')
              }
              sx={{ mt: 2, width: { sm: '70%', md: '80%' } }}
            />
          )}
        />

        <CustomButton
          variant="outlined"
          fullWidth
          type="submit"
          onClick={handleSubmit(handleLogin)}
          sx={{
            width: '60%',
            backgroundColor: '#7C28F2',
            mt: 4,
            px: { xs: 2, sm: 4, md: 6 },
            borderRadius: '1rem',
            color: '#fff',
          }}
        >
          LOG IN
        </CustomButton>

        <Box display="flex" justifyContent="center" sx={{ my: 4 }}>
          <MuiLink sx={{ textDecoration: 'none' }} href="/forgot-password">
            Forgot Password?
          </MuiLink>
        </Box>

        <Box
          sx={{
            mt: 4,
            width: '80%',
            textAlign: 'center',
            height: '.6rem',
            display: 'flex',
            alignItems: 'flex-end',
            '&::before, &::after': {
              content: '""',
              flex: 1,
              borderTop: '1px solid #E6E6ED',
              height: '.7rem',
            },
          }}
        >
          <Box sx={{ mx: '.5rem' }}>
            <Typography
              sx={{
                fontSize: '1rem',
                width: '100%',
                color: '#4C5567',
              }}
            >
              or continue with
            </Typography>
          </Box>
        </Box>
        <CustomButton
          variant="outlined"
          sx={{
            backgroundColor: 'transparent',
            mt: 1,
            px: { xs: 2, sm: 4, md: 6 },
            borderRadius: '1rem',
            color: '#7C28F2',
            '&:hover': {
              backgroundColor: '#5D33D2',
              boxShadow: 'none',
              color: '#fff',
            },
          }}
        >
          <Box
            component="img"
            src="/svg/Google.svg"
            sx={{
              marginRight: '.5rem',
              width: '24px',
            }}
          />{' '}
          Sign up with Google
        </CustomButton>
        <Typography sx={{ my: 2, mb: 6, textAlign: 'center', fontWeight: 500 }}>
          Don&apos;t have an Account?{' '}
          <MuiLink
            onClick={() => setSignUp((prev: boolean) => !prev)}
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            Sign Up
          </MuiLink>
        </Typography>
      </Paper>
    </Container>
  );
}
export default Login;
