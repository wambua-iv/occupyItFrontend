import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { Phone, Email } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';
import { Loading } from '../utils';
import { AuthContext } from '../../../utils/GlobalState';
import { User } from '.';
import Router from 'next/router';

function Registration({ name, ID, email, phone_number }: User) {
  const [authState] = useContext(AuthContext);
  const [createAlert, setCreateAlert] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setCreateAlert((prev: boolean) => !prev);
    const url = 'https://occupy-it.herokuapp.com/owners/registration';
    await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authState?.tokens.access_token}`,
      },
      body: JSON.stringify({
        ID: ID,
        property_registration: data?.property_registration,
      }),
    })
      .then((data: any) => {
        if (data?.message == 'Internal server error' || data?.statusCode > 300 ) {throw new Error()};
        setCreateAlert((prev) => !prev);
        setInterval(() => {
          Router.push('/listings');
        }, 5000);
      })
      .catch((err: any) => Router.reload());
  };
  return authState?.logged == true ? (
    <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center' }}>
      <Paper
        sx={{
          m: 'auto',
          height: { xs: '90px', sm: '60vh' },
          width: { xs: '90px', sm: '90px', md: '80%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '1rem',
        }}
      >
        {' '}
        {createAlert ? (
          <Alert severity="success" sx={{ width: '100%' }}>
            Please await confirmation of verification
          </Alert>
        ) : (
          <></>
        )}
        <Box
          sx={{
            backgroundColor: '#9998',
            height: { xs: '250px', md: '250px' },
            width: '100%',
            p: 4,
            borderRadius: '1rem  1rem 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h5">Property Owner Registration</Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                mx: 2,
                backgroundColor: '#fff',
                color: '#000',
                px: 2,
                width: { md: '150px' },
                height: '50px',
              }}
            >
              Update Information
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              sx={{
                borderRadius: '3rem 0 3rem  3rem',
                backgroundColor: '#7C28F2',
                color: '#fff',
                px: 2,
                width: { md: '200px' },
                height: '50px',
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: { xs: '250px', md: '450px' },
            width: '100%',
            p: 4,
          }}
        >
          <Box
            sx={{
              mt: -10,
              p: 2,
              mx: 'auto',
              width: '70%',
              height: '140px',
              backgroundColor: '#fff',
              border: '1px solid #999',
              borderRadius: '.5rem',
              display: 'flex',
            }}
          >
            <Box
              component="img"
              alt='Photo by <a href="https://unsplash.com/es/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Dam</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
              src="/profile.jpg"
              sx={{
                width: { xs: '120px', md: '100px' },
                height: { xs: '120px', md: '100px' },
                borderRadius: '50%',
                mr: 4,
                objectFit: 'cover',
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: '1.5rem', mb: 2 }}>
                {`${name?.firstname} ${name?.lastname}`}
              </Typography>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Phone /> <Typography sx={{ ml: 2 }}>{phone_number}</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 1 }}>
                <Email /> <Typography sx={{ ml: 2 }}>{email}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              mx: 'auto',
              width: '70%',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 600, mb: 2 }}>
                National ID
              </Typography>
              <Typography>{ID}</Typography>
              <Typography></Typography>
            </Box>
            <Box>
              <Controller
                control={control}
                name="property_registration"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    onChange={onChange}
                    value={value || ' '}
                    onBlur={onBlur}
                    label="Property registration"
                    type="text"
                    variant="standard"
                    error={errors.property_registration?.type}
                    helperText="Please provide the registration number to one of your properties"
                    required
                    sx={{ mt: 2, width: { sm: '70%', md: '80%' } }}
                  />
                )}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  ) : (
    <Loading redirectUrl="/auth" />
  );
}
export default Registration;
