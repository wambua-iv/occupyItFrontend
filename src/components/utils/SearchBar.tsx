import { LocationOn, SearchRounded } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  MenuItem,
  styled,
  TextField,
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
      label: '<5000',
    },
    {
      value: 10000,
      label: '5000 - 10000',
    },
    {
      value: 15000,
      label: '10000-15000',
    },
    {
      value: 16000,
      label: '>15000',
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: { xs: '98%', sm: '80%', md: '70%' },
          height:{md: '90px'},
          backgroundColor: '#e9e9e9',
          mx: { xs: 'auto', sm: 6, md: 6 },
          mt: { xs: 0, sm: -5, md: -6 },
          mb: 2,
          p: 1,
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row', md: 'row' },
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
              label=" "
              placeholder='Choose a location'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
              type="text"
              variant="standard"
              helperText={errors.location && 'Select a location'}
              sx={{ width: { sm: '35%', md: '35%' }, mb: 2 }}
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
              sx={{ width: { sm: '35%', md: '35%' }}}
            >
              {propertyTypes.map((option) => (
                <MenuItem key={option.value} value={option.value || ''}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Button sx={{
                height: '3rem',
                borderRadius: '1rem',
                backgroundColor: '#7C28F2',
                color: '#fff',
                px: { xs: .5, sm: 2, md: 2 },
                py:1,
                mx: 4,
                my:2
        }}>
          <SearchRounded />
        </Button>
      </Box>
    </Container>
  );
}
