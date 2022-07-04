import { Email, LockOpen } from '@mui/icons-material';
import {
  Box,
  Container,
  TextField,
  InputAdornment,
  Paper,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import MuiPhoneNumber from 'material-ui-phone-number';
import React from 'react';
import { CustomButton } from '../../styles';
import { LoadingButton } from '@mui/lab';

interface SignUpCard {
  setSignUp(prev: any): void;
  onSubmit(data: any): void;
}

function SignUp({ setSignUp, onSubmit }: SignUpCard) {
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
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
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
        <form
          style={{
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              mt: 4,
              width: { xs: '90%', sm: '90%', md: '80%' },
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
                  sx={{ mt: 2, width: { xs: '90%', sm: '80%', md: '45%' } }}
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
                  sx={{ mt: 2, width: { xs: '90%', sm: '80%', md: '45%' } }}
                />
              )}
            />
          </Box>

          <Box
            sx={{
              width: { xs: '90%', sm: '90%', md: '80%' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Controller
              control={control}
              name="ID"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value || ''}
                  onBlur={onBlur}
                  label="National ID"
                  variant="standard"
                  helperText={
                    errors.ID?.type === 'required' && 'ID is required'
                  }
                  sx={{ mt: 2, width: { xs: '90%', sm: '80%', md: '45%' } }}
                />
              )}
            />

            <Controller
              control={control}
              name="phone_number"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <MuiPhoneNumber
                  onChange={onChange}
                  value={value || ''}
                  onBlur={onBlur}
                  sx={{ mt: 4, width: { xs: '90%', sm: '80%', md: '50%' } }}
                  defaultCountry={'ke'}
                  variant="standard"
                  helperText={
                    errors.phone_number?.type === 'required' &&
                    'Mobile number is required'
                  }
                />
              )}
            />
          </Box>

          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                onChange={onChange}
                value={value || ' '}
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
                  (errors.email?.type === 'required' &&
                    'Email feild is required')
                }
                required
                sx={{ mt: 2, width: { sm: '70%', md: '80%' } }}
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
                sx={{ mt: 2, width: { sm: '70%', md: '80%' } }}
              />
            )}
          />

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
                sx={{ mt: 2, width: { sm: '70%', md: '80%' } }}
              />
            )}
          />

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

          <Typography sx={{ my: 2, textAlign: 'center', fontWeight: 500 }}>
            Already have an Account?{' '}
            <MuiLink
              onClick={() => setSignUp((prev: boolean) => !prev)}
              sx={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              Log In
            </MuiLink>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
}
export default SignUp;
