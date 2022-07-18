import { Alert, Box, LinearProgress, Paper, Typography } from '@mui/material';
import React from 'react';
import ConfirmBooking from '../book-property/ConfirmBooking';

function Success({ propertyData, images, onSubmit, submit, loading, error }: any) {
  const property = { ...propertyData, images: images };

  console.log(property);
  return (
    <Paper
      sx={{
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {loading ? 
      <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>: (<></>)}
      {submit ? (
        <Alert
          severity="success"
          sx={{ width: '100%', }}
        >
          Property listing created
        </Alert>
      ) : (
        <></>
      )}
      {error ? (
        <Alert
          severity="error"
          sx={{ width: '100%', }}
        >
          Submission failed
        </Alert>
      ) : (
        <></>
      )}
      <ConfirmBooking property={property} handleData={onSubmit}/>
      <Box
        sx={{
          backgroundColor: '#784af4',
          justifyContent: 'space-between',
          width: '35%',
        }}
      ></Box>
    </Paper>
  );
}
export default Success;
