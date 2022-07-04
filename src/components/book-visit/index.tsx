import { Box, Container, Paper, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React, {useState} from 'react';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MuiPhoneNumber from 'material-ui-phone-number';
import {
  CustomButton,
  SpacedTypograph,
  WeightedTypography,
} from '../../styles';

function BookPropertyVisit({ name, type, price, location }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

	const [Visitation, setVisitation] = useState({});
  const handleData = (data: any) => setVisitation((prev: any) => ({ ...prev, ...data }));

  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          p: 4,
          backgroundColor: '#fff',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
					alignItems: 'center'
        }}
      >
        <Typography
          sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, my: 2 }}
        >
          Create visitation request
        </Typography>

        <Box sx={{ width: { sm: '70%', md: '70%' }, }}>
          <SpacedTypograph>
            <WeightedTypography>Property Type: </WeightedTypography>
            <Typography>{type}</Typography>
          </SpacedTypograph>
          <SpacedTypograph>
            <WeightedTypography>Price</WeightedTypography>
            <Typography>ksh {price}</Typography>
          </SpacedTypograph>
          <SpacedTypograph>
            <WeightedTypography>Location</WeightedTypography>
            <Typography>{location}</Typography>
          </SpacedTypograph>
        </Box>

        <Controller
          control={control}
          name="names"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onChange={onChange}
              value={value || ''}
              onBlur={onBlur}
              label="Name"
              type="text"
              variant="standard"
              helperText={
                errors.names?.type === 'required' && 'Name is required'
              }
              required
              sx={{ width: { sm: '70%', md: '70%' }, mb: 2 }}
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
              sx={{ mt: 2, width: { xs: '90%', sm: '80%', md: '70%' } }}
              defaultCountry={'ke'}
              variant="standard"
              helperText={
                errors.phone_number?.type === 'required' &&
                'Mobile number is required'
              }
            />
          )}
        />

        <Controller
          control={control}
          name="visit"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of visitation"
                minDate={new Date('2017-01-01')}
                value={value}
                onChange={onChange}
                renderInput={(params) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    {...params}
                    helperText={
                      errors.visit?.type === 'required' &&
                      'Please provide visitation date'
                    }
                    sx={{ width: { sm: '70%', md: '60%' }, my: 4 }}
                  />
                )}
              />
            </LocalizationProvider>
          )}
        />

<CustomButton
        variant="outlined"
        type="submit"
        onClick={handleSubmit(handleData)}
      >
       Submit
      </CustomButton>
      
      </Paper>
    </Container>
  );
}
export default BookPropertyVisit;
