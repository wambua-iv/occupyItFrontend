import { Box, Typography, InputLabel, TextField, Paper } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CreateListingFormInterface } from './index';
import MuiPhoneNumber from 'material-ui-phone-number';
import { CustomButton } from '../../styles';


function ContactInfo({ handleData, steps, step }: CreateListingFormInterface) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Paper
      sx={{
        p: 2,
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, mb: 0.5 }}
      >
        Contact Information
      </Typography>

      <Controller
        control={control}
        name="owner"
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
              errors.property_name?.type === 'required' &&
              'Property name is required'
            }
            required
            sx={{ width: { sm: '70%', md: '80%' }, mb: 2 }}
          />
        )}
      />

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
            type="email"
            variant="standard"
            helperText={
              (errors.email?.type === 'pattern' &&
                'Enter valid email pattern') ||
              (errors.email?.type === 'required' && 'Email feild is required')
            }
            required
            sx={{ width: { sm: '70%', md: '80%' } }}
          />
        )}
      />

      <Box
        sx={{
          display: 'flex',
          my: 2,
          justifyContent: 'space-between',
          width: { sm: '70%', md: '80%' },
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
              helperText={errors.ID?.type === 'required' && 'ID is required'}
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
        name="addition_info"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            onChange={onChange}
            value={value || ''}
            onBlur={onBlur}
            label="Property Additional "
            type="text"
            variant="outlined"
            multiline
            rows={4}
            sx={{ width: { sm: '70%', md: '80%' }, my: 2 }}
          />
        )}
      />

<CustomButton
        variant="outlined"
        type="submit"
        onClick={handleSubmit(handleData)}
      >
        {step === steps.length - 1 ? 'Finish' : 'Next'}
      </CustomButton>
    </Paper>
  );
}

export default ContactInfo;
