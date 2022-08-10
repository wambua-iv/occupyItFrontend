import { Email, LockOpen } from '@mui/icons-material';
import {
  Box,
  Container,
  InputAdornment,
  Link as MuiLink,
  Paper,
  Typography,
  TextField,
  LinearProgress,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React from 'react';
import { CustomButton } from '../../styles';
import { LoadingButton } from '@mui/lab';

interface AuthCardInterface {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin(data: any): void;
  onSubmit(data: any): void;
  loading: boolean;
  isSignUp: boolean;
}

function AuthCard({
  setSignUp,
  handleLogin,
  onSubmit,
  loading,
  isSignUp,
}: AuthCardInterface) {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: {xs: 2, sm: 2, md: 4},
        mx: 'auto',
        p:0,
        height: '70vh',
        width: '98%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper
        sx={{
          pt: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          width: { xs: '100%', sm: '60%', md: '50%' },
          borderRadius: '1rem',
        }}
      >
        {loading ? (
          <Box sx={{ mt: 0.2, width: '96%' }}>
            <LinearProgress />
          </Box>
        ) : (
          <></>
        )}
        {isSignUp ? (
          <Box
            sx={{
              width: { xs: '80%', sm: '90%', md: '80%' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Controller
              control={control}
              name="firstname"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value || ''}
                  onBlur={onBlur}
                  label="First name"
                  variant="standard"
                  helperText={
                    errors.firstname?.type === 'required' &&
                    'First name is required'
                  }
                  sx={{ mt: 2, width: { xs: '100%', sm: '80%', md: '48%' } }}
                />
              )}
            />

            <Controller
              control={control}
              name="lastname"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value || ''}
                  onBlur={onBlur}
                  label="Surname"
                  variant="standard"
                  helperText={
                    errors.lastname?.type === 'required' &&
                    'Surname is required'
                  }
                  sx={{ mt: 2, width: { xs: '100%', sm: '80%', md: '48%' } }}
                />
              )}
            />
          </Box>
        ) : (
          <></>
        )}
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onChange={onChange}
              value={value || ''}
              onBlur={onBlur}
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
                (errors.email?.type === 'pattern' &&
                  'Enter valid email pattern') ||
                (errors.email?.type === 'required' && 'Email is required')
              }
              sx={{ mt: 2, width: { xs: '80%', sm: '70%', md: '80%' } }}
            />
          )}
        />
        {/*pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ */}

        <Controller
          control={control}
          name="password"
          rules={{ required: true, minLength: 8 }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onChange={onChange}
              value={value || ''}
              onBlur={onBlur}
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
                (errors.password?.type === 'required' &&
                  'Password is required') ||
                (errors.password &&
                  'Password length should be longer than 8 characters')
              }
              sx={{ mt: 2, width: { xs: '80%', sm: '70%', md: '80%' } }}
            />
          )}
        />

        {isSignUp ? (
          <Controller
            control={control}
            name="confirm_password"
            rules={{
              required: true,
              validate: (value) => {
                const { password } = getValues();
                return password === value || 'Passwords should match!';
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                onChange={onChange}
                value={value || ''}
                onBlur={onBlur}
                label="Confirm Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpen />
                    </InputAdornment>
                  ),
                }}
                type="password"
                helperText={
                  (errors.confirm_password &&
                    errors.confirm_password.message) ||
                  (errors.password?.type === 'required' &&
                    'Password is required')
                }
                variant="standard"
                sx={{ my: 2, width: { xs: '80%', sm: '70%', md: '80%' } }}
              />
            )}
          />
        ) : (
          <></>
        )}

        {isSignUp ? (
          <>
            <LoadingButton
              variant="outlined"
              type="submit"
              fullWidth
              onClick={handleSubmit(onSubmit)}
              sx={{
                width: '60%',
                backgroundColor: '#7C28F2',
                mt: 4,
                px: { xs: 2, sm: 4, md: 6 },
                borderRadius: '1rem',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#5D33D2',
                  boxShadow: 'none',
                  color: '#000',
                },
              }}
            >
              SIGN UP
            </LoadingButton>
          </>
        ) : (
          <>
            <CustomButton
              variant="outlined"
              fullWidth
              //type="submit"
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

            <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
              <MuiLink sx={{ textDecoration: 'none' }} href="/forgot-password">
                Forgot Password?
              </MuiLink>
            </Box>
          </>
        )}

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
              width: '28px',
              backgroundColor: '#fff',
              p: .1,
              borderRadius: '50%',
            }}
          />{' '}
         {isSignUp? 'Sign up with' : 'Login'} with Google
        </CustomButton>
        {isSignUp ? (
          <Typography sx={{ my: 2, textAlign: 'center', fontWeight: 500 }}>
            Already have an Account?{' '}
            <MuiLink
              onClick={() => setSignUp((prev: boolean) => !prev)}
              sx={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              Log In
            </MuiLink>
          </Typography>
        ) : (
          <Typography
            sx={{ mt: 2, mb: 6, textAlign: 'center', fontWeight: 500 }}
          >
            Don&apos;t have an Account?{' '}
            <MuiLink
              onClick={() => setSignUp((prev: boolean) => !prev)}
              sx={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              Sign Up
            </MuiLink>
          </Typography>
        )}
      </Paper>
    </Container>
  );
}
export default AuthCard;
