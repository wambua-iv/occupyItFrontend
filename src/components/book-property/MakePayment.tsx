import {
  AccountCircleOutlined,
  CreditCardOutlined,
  LockOutlined,
} from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import {
  Box,
  Container,
  Input,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MuiPhoneNumber from 'material-ui-phone-number';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BookPropertyFormInterface } from '.';
import { CustomButton } from '../../styles';

function MakePayment({ handleData, steps, step }: BookPropertyFormInterface) {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const paymentModes = [
    {
      value: 'Mpesa',
    },
    {
      value: 'Credit card',
    },
  ];

  const [date, setDate] = useState<Date | null>(new Date());
  const [paymentMode, setPaymentMode] = useState({ value: 'none' });
  const updatePaymentMode = (value: any) =>
    setPaymentMode({ value: value?.target.value });
  return (
    <Paper
    sx={{
      p: 2,
      backgroundColor: '#fff',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >      <Controller
        control={control}
        name="name"
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
              errors.name?.type === 'required' &&
              'Name is required'
            }
            required
            sx={{ width: { sm: '70%', md: '90%' }, mb: 2 }}
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
            value={value || ''}
            onBlur={onBlur}
            label="Email"
            type="text"
            variant="standard"
            helperText={
              errors.email?.type === 'required' &&
              'Email is required'
            }
            required
            sx={{ width: { sm: '70%', md: '90%' }, mb: 1 }}
          />
        )}
      />

      <Box
        sx={{
          mb: 2,
          width: { xs: '90%', sm: '90%', md: '80%' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'left',
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
              sx={{ mt: 1, width: { xs: '90%', sm: '80%', md: '45%' } }}
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
              sx={{ mt: 2, width: { xs: '90%', sm: '80%', md: '50%' } }}
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
        name="payment_mode"
        render={({ field: { onBlur, value } }) => (
          <TextField
            id="outlined-select-currency"
            select
            label="Mode of payment"
            variant="outlined"
            value={value || ''}
            onBlur={onBlur}
            onChange={updatePaymentMode}
            helperText={
              errors.payment_mode?.type === 'required' && 'Please select a payment method'
            }
            sx={{ width: { sm: '70%', md: '80%' }, mb: 2 }}
          >
            {paymentModes.map((option) => (
              <MenuItem key={option.value} value={option.value || ''}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="payment"
        render={({ field: { onChange, onBlur, value } }) => {
          //setPaymentMode(() => ({value: payment_mode}))
          return paymentMode.value == 'Credit card' ? (
            <VisaCard date={date} setDate={setDate} />
          ) : (
            <Box sx={{ width: { sm: '70%', md: '90%' } }}>
              <Controller
                control={control}
                name="mpesa_payment"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    onChange={onChange}
                    value={value || ''}
                    onBlur={onBlur}
                    label="Mpesa transaction code"
                    type="text"
                    variant="outlined"
                    sx={{ width: { sm: '70%', md: '90%' }, mb: 4 }}
                  />
                )}
              />
            </Box>
          );
        }}
      />

      <CustomButton
        variant="outlined"
        type="submit"
        //onClick={handleSubmit()}
      >
        {step === steps.length - 1 ? 'Finish' : 'Next'}
      </CustomButton>
      
    </Paper>
  );
}

function VisaCard({ date, setDate }: any) {
  return (
    <Paper
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(-45deg, #0005 30%, #9991 90%)',
        height: { xs: '169px', sm: '250px' },
      }}
      elevation={2}
    >
      <Typography>Payment Details</Typography>
      <Input
        startAdornment={
          <InputAdornment position="start">
            <AccountCircleOutlined />
          </InputAdornment>
        }
        placeholder="Card Holder Name"
        sx={{ mb: 2, width: '80%' }}
      />
      <Input
        startAdornment={
          <InputAdornment position="start">
            <CreditCardOutlined />
          </InputAdornment>
        }
        placeholder="Credit Card Number"
        sx={{ mb: 4, width: '80%' }}
      />
      <Box
        sx={{
          mb: 4,
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['year', 'month']}
            label="Card Expiry"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => (
              <TextField sx={{ width: '60%' }} {...params} helperText={null} />
            )}
          />
        </LocalizationProvider>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <LockOutlined />
            </InputAdornment>
          }
          placeholder="CVV"
          sx={{ mb: 4, width: '30%', display: 'flex' }}
        />
      </Box>
    </Paper>
  );
}
export default MakePayment;
