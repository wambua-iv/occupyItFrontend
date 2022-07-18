import { MenuItem, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CreateListingFormInterface } from './index';
import { CustomButton } from '../../styles';

function Details({ handleData, steps, step }: CreateListingFormInterface) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const propertyTypes = [
    {
      value: 'Rental',
    },
    {
      value: 'Bed and Breakfast',
    },
    {
      value: 'On sale',
    },
    {
      value: 'AirBnB',
    },
  ];

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
        Property Details
      </Typography>

      <Controller
        control={control}
        name="property_name"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            onChange={onChange}
            value={value || ''}
            onBlur={onBlur}
            label="Property Name"
            type="text"
            variant="standard"
            helperText={
              errors.property_name?.type === 'required' &&
              'Property name is required'
            }
            required
            sx={{ width: { sm: '70%', md: '90%' }, mb: 2 }}
          />
        )}
      />

      <Controller
        control={control}
        name="type"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            select
            label="Property Type"
            variant="outlined"
            value={value || ''}
            onChange={onChange}
            helperText={
              errors.type?.type === 'required' && 'Please select a property'
            }
            sx={{ width: { sm: '70%', md: '90%' }, mb: 2 }}
          >
            {propertyTypes.map((option) => (
              <MenuItem key={option.value} value={option.value || ''}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Controller
        control={control}
        name="description"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            onChange={onChange}
            value={value || ''}
            onBlur={onBlur}
            label="Property Description"
            type="text"
            variant="outlined"
            helperText={
              errors.description?.type === 'required' &&
              'Property name is required'
            }
            multiline
            rows={5}
            required
            sx={{ width: { sm: '70%', md: '90%' }, mb: 2 }}
          />
        )}
      />
      
      <Controller
        control={control}
        name="price"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            onChange={onChange}
            value={value || ''}
            onBlur={onBlur}
            label="price"
            type="text"
            variant="outlined"
            helperText={
              errors.price?.type === 'required' && 'Property price is required'
            }
            sx={{ width: { sm: '70%', md: '90%' } }}
          />
        )}
      />
      <CustomButton
        variant="outlined"
        type="submit"
        onClick={handleSubmit(handleData)}
        sx={{my: 2, position: 'relative', right: '-38%'}}
      >
        {step === steps.length - 1 ? 'Finish' : 'Next'}
      </CustomButton>
    </Paper>
  );
}
export default Details;
