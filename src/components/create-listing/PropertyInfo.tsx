import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Typography, TextField, MenuItem, Paper } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CreateListingFormInterface } from './index';
import { CustomButton } from '../../styles';

function PropertyInfo({
  handleData,
  steps,
  step,
  onLoad,
}: CreateListingFormInterface) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const propertyTypes = [
    {
      value: 'Single',
    },
    {
      value: 'BedSitter',
    },
    {
      value: 'One Bedroom',
    },
    {
      value: 'Two Bedroom',
    },
    {
      value: 'Three BedRoom',
    },
  ];

  const washroomTypes = [
    {
      value: 'External',
    },
    {
      value: 'Joint',
    },
    {
      value: 'Separate',
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
      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.8rem' } }}>
        Property Infomation
      </Typography>

      <Box
        sx={{
          display: 'flex',
          my: 2,
          justifyContent: 'space-between',
          width: { sm: '70%', md: '90%' },
        }}
      >
        <Controller
          control={control}
          name="location"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onChange={onChange}
              value={value || ''}
              onBlur={onBlur}
              label="Location"
              type="text"
              variant="outlined"
              helperText={
                errors.location?.type === 'required' &&
                'Property name is required'
              }
              required
              sx={{ width: { sm: '70%', md: '55%' }, mb: 2 }}
            />
          )}
        />{' '}
        <Controller
          control={control}
          name="house_number"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onChange={onChange}
              value={value || ''}
              onBlur={onBlur}
              label="House Number"
              type="text"
              variant="outlined"
              sx={{ width: { sm: '70%', md: '40%' }, mb: 2 }}
            />
          )}
        />
      </Box>

      <Controller
        control={control}
        name="availability"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Property Availability"
              minDate={new Date('2017-01-01')}
              value={value}
              onChange={onChange}
              renderInput={(params) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  {...params}
                  helperText={
                    errors.availability?.type === 'required' &&
                    'Please provide property availability'
                  }
                  sx={{ width: { sm: '70%', md: '90%' }, mb: 2 }}
                />
              )}
            />
          </LocalizationProvider>
        )}
      />

      <Box
        sx={{
          display: 'flex',
          my: 2,
          justifyContent: 'space-between',
          width: { sm: '70%', md: '90%' },
        }}
      >
        <Controller
          control={control}
          name="bedrooms"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              select
              label="Number of Bedrooms"
              variant="outlined"
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              helperText={
                errors.bedrooms?.type === 'required' &&
                'Please select a property'
              }
              sx={{ width: { sm: '70%', md: '50%' } }}
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
          name="washroom"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              select
              label="Washroom layout"
              variant="outlined"
              hidden
              value={value || ''}
              onChange={onChange}
              onBlur={onBlur}
              helperText={
                errors.bedrooms?.type === 'required' &&
                'Please select a property'
              }
              sx={{ width: { sm: '70%', md: '40%' } }}
            >
              {washroomTypes.map((option) => (
                <MenuItem key={option.value} value={option.value || ''}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Box>

      <TextField
        type="file"
        name="file"
        variant="outlined"
        onChange={onLoad}
        inputProps={{
          multiple: true,
          accept: 'image/*',
        }}
        helperText="Upload property images individually"
        sx={{ width: { sm: '70%', md: '80%' } }}
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
export default PropertyInfo;
