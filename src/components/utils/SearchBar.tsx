import { LocationOn } from '@mui/icons-material';
import {
  Box,
  Container,
  Input,
  InputAdornment,
  MenuItem,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React from 'react';
import { Divider } from '../../styles';

const InputArea = styled(Box)({
  width: '210px',
  height: '70%',
  px: 2,
  py: 1,
});

export function SearchBar() {
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

  const priceRanges = [
    {
      value: 5000,
      label: '<5000'
    },
    {
      value: 10000,
      label: '5000 - 10000'    },
    {
      value: 15000,
      label: '10000-15000'    },
    {
      value: 16000,
      label: '>15000'    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <Box
        sx={{
          height: { xs: 35, sm: 75, md: 80 },
          width: { xs: 350, sm: 600, md: 700 },
          backgroundColor: '#fff',
          mx: 6,
          my: -6,
          mb: 3,
          p: 1,
          borderRadius: '1rem',
          display: 'flex',
          position: 'relative',
          zIndex: 10,
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
                ),
              }}
              type="text"
              variant="standard"
              helperText={
                errors.location && 'Select a location'
              }
              required
              sx={{ width: { sm: '70%', md: '35%' }, mb: 2 }}
            />
          )}
        />
    
        <Divider />
        <Controller
        control={control}
        name="type"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            select
            label="Property Type"
            variant="standard"
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.type?.type && 'Please select a property'
            }
            sx={{ width: { sm: '70%', md: '30%' }, mb: 2 }}
          >
            {propertyTypes.map((option) => (
              <MenuItem key={option.value} value={option.value || ''}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
        <Divider />
        
        <Controller
        control={control}
        name="price"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            select
            label="Price Range"
            variant="standard"
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.type && 'Please select a property'
            }
            sx={{ width: { sm: '70%', md: '30%' }, mb: 2 }}
          >
            {priceRanges.map((option) => (
              <MenuItem key={option.value} value={option.value || ''}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      </Box>
    </Container>
  );
}
